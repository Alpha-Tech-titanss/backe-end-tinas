import { ApolloDriver } from "@nestjs/apollo";
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { PubSub } from "apollo-server-express";
import { join } from "path";
import { AdministrationModule } from "./administration/administration.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { BundleModule } from "./bundle/bundle.module";
import { ChatbotModule } from "./chatbot/chatbot.module";
import { BaseCommerceModule } from "./commerce/commerce.module";
import { DefaultConfigModule } from "./default-config/default-config.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { NotificationModule } from "./notification/notification.module";
import { ProgressModule } from "./progress/progress.module";
import { ReportModule } from "./report/report.module";
import { ReviewModule } from "./review/review.module";
import { StatsModule } from "./stats/stats.module";
import { SuggestionModule } from "./suggestion/suggestion.module";
import { TripModule } from "./trip/trip.module";
import { UserModule } from "./user/user.module";
import config from "./utils/config/configuration";
import { SupplierModule } from "./supplier/supplier.module";
import { BackupService } from "./utils/backup.service";
import { ScheduleModule } from "@nestjs/schedule";
import { MetaDataModule } from "./meta-data/meta-data.module";

@Global()
@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>("db.connectionUrl"),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      formatError: (err: any) => ({
        message: err.message,
        status: err.status || 500,
      }),
      uploads: {
        maxFileSize: 2000000000,
        maxFiles: 10,
      },
      playground: true,
      // subscriptions: {
      //   keepAlive: 5000,
      // }, //
      context: ({ req, connection }) =>
        connection
          ? {
              req: {
                headers: {
                  ...connection.context,
                  authorization:
                    connection.context["Authorization"] ||
                    req.headers["authorization"],
                },
              },
            }
          : { req },
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    UserModule,
    NotificationModule,
    BaseCommerceModule,
    AdministrationModule,
    ReviewModule,
    BundleModule,
    TripModule,
    ChatbotModule,
    SuggestionModule,
    FeedbackModule,
    ReportModule,
    ProgressModule,
    StatsModule,
    DefaultConfigModule,
    SupplierModule,
    MetaDataModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /*
  {
    provide: APP_GUARD,
    useClass: RoleGuard,
  },*/
    {
      provide: "PUB_SUB",
      useValue: new PubSub(),
    },
    BackupService,
  ],
  exports: ["PUB_SUB"],
})
export class AppModule {}
