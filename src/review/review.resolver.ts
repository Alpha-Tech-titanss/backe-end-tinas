import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
    @CurrentUser() user,
  ) {
    return this.reviewService.create({...createReviewInput , user: user.id });
  }

  @Query(() => [Review], { name: 'review' })
  findAll() {
    return this.reviewService.findAll();
  }

  @Query(() => Review, { name: 'review' })
  findOne(@Args('id', { type: () => String }) id) {
    return this.reviewService.findOne(id);
  }

  @Mutation(() => Review)
  updateReview(
    @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
    @CurrentUser() user,
  ) {
    return this.reviewService.update(updateReviewInput.reviewId, updateReviewInput.feedback, user.id);
  }

}
