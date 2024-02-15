import { forwardRef, Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackResolver } from './feedback.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { Feedback, FeedbackSchema } from './entities/feedback.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feedback.name, schema: FeedbackSchema }]),
    forwardRef(() => UserModule)
  ],
  providers: [FeedbackResolver, FeedbackService]
})
export class FeedbackModule {}
