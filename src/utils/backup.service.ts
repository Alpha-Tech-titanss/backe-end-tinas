import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cron, CronExpression } from "@nestjs/schedule";
import * as childProcess from "child_process";
import { zip } from "zip-a-folder";
import * as admin from "firebase-admin";
const fs = require("fs").promises;
@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);
  constructor(private configService: ConfigService) {}
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async backupMongoDB() {
    try {
      const databaseURL = this.configService.get<string>("db.connectionUrl");
      const backupProcess = childProcess.spawn("mongodump", [
        "--uri",
        databaseURL,
      ]);

      backupProcess.on("close", async (code) => {
        if (code === 0) {
          console.log(`MongoDB backup completed`);
          await zip("dump/database", "dump.zip");
          console.log(`Backup file zip created`);
          await this.uploadFileToFirebaseStorage("dump.zip", `mongo-backups/${Date.now()}.zip`);
          fs.rm("dump/database", { recursive: true, force: true });
        } else {
          console.error(`MongoDB backup failed with code ${code}`);
        }
      });
    } catch (error) {
      this.logger.error("Error while running MongoDB backup:", error);
    }
  }
  async uploadFileToFirebaseStorage(filePath: string, destinationPath: string) {
    try {
      const bucket = admin.storage().bucket();
      await bucket.upload(filePath, {
        destination: destinationPath,
        metadata: {
          contentType: "application/zip", // Set the content type accordingly
        },
      });
      console.log("File uploaded to Firebase Storage.");
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }
  async deleteFile(filePath) {
    try {
      await fs.unlink(filePath);
      console.log("File has been successfully deleted.");
    } catch (err) {
      console.error("Error deleting the file:", err);
    }
  }
}
