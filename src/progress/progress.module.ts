import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressResolver } from './progress.resolver';
import { Progress, ProgressSchema , ChapterProgress , ChapterProgressSchema} from './entities/progress.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Progress.name, schema: ProgressSchema },{ name: ChapterProgress.name, schema: ChapterProgressSchema }]),
  ],
  providers: [ProgressResolver, ProgressService],
  exports: [ProgressService]
})
export class ProgressModule {}
