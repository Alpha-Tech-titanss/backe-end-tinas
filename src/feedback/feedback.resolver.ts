import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { Feedback } from './entities/feedback.entity';
import { FeedbackService } from './feedback.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Mutation(() => Feedback)
  createFeedback(@Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput, @CurrentUser() user ) {
    return this.feedbackService.create({...createFeedbackInput, reporter: user.id  } as CreateFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  findAll() {
    return this.feedbackService.findAll();
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args('id', { type: () => String }) id) {
    return this.feedbackService.findOne(id);
  }

  @Mutation(() => Feedback)
  updateFeedback(@Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput) {
    return this.feedbackService.update(updateFeedbackInput.id, updateFeedbackInput);
  }

  @Mutation(() => Feedback)
  removeFeedback(@Args('id', { type: () => String }) id) {
    return this.feedbackService.remove(id);
  }
}
