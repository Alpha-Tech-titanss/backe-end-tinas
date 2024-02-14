import { forwardRef, Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportResolver } from './report.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './entities/report.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
    forwardRef(() => UserModule)
    ],
  providers: [ReportResolver, ReportService],
  exports: [ReportService]
})
export class ReportModule {}
