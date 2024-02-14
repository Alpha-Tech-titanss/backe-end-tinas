import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommerceService } from './commerce.service';
import { Commerce } from './entities/base-commerce.entity';
import { CreateBaseCommerceInput, SearchParamsInput } from './dto/create-base-commerce.input';
import { UpdateBaseCommerceInput } from './dto/update-base-commerce.input';
import { CreateReviewInput, CreateReviewRoomInput } from 'src/review/dto/create-review.input';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { Review } from 'src/review/entities/review.entity';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { UploadMedia } from 'src/utils/file.schema';
import { CreateAdditionInput } from './dto/add-include.input';
import { Room } from './entities/items/room.entity';
import { Public } from 'src/utils/guards/public.decorator';

@UseGuards(GqlAuthGuard)
@Resolver(() => Commerce)
export class CommerceResolver {
  constructor(private readonly commerceService: CommerceService) { }

  @UseInterceptors(GraphqlFiles(['createBaseCommerceInput.images']))
  @Mutation(() => Commerce)
  async createCommerce(
    @Args('createBaseCommerceInput')
    createBaseCommerceInput: CreateBaseCommerceInput,
  ) {
    return this.commerceService.create(createBaseCommerceInput);
  }

  @Public()
  @Query(() => [Commerce], { name: 'commerces' })
  findAll() {
    return this.commerceService.findAll();
  }

  @Public()
  @Query(() => Commerce, { name: 'commerce' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.commerceService.findOne(id);
  }

  @UseInterceptors(GraphqlFiles(['updateBaseCommerceInput.images']))
  @Mutation(() => Commerce)
  updateCommerce(
    @Args('updateBaseCommerceInput')
    updateBaseCommerceInput: UpdateBaseCommerceInput,
  ) {
    return this.commerceService.update(
      updateBaseCommerceInput.id,
      updateBaseCommerceInput,
    );
  }

  @Mutation(() => Commerce)
  removeCommerce(@Args('id', { type: () => String }) id: string) {
    return this.commerceService.remove(id);
  }

  @Public()
  @Query(() => [Commerce])
  allCommerceByType(@Args('type', { type: () => String }) type: string) {
    return this.commerceService.AllCommerceType(type);
  }

  @UseInterceptors(GraphqlFiles(['reviewInput.image']))
  @Mutation(() => Review)
  async reviewCommerce(
    @Args('reviewInput') review: CreateReviewInput,
    @CurrentUser() user,
  ) {
    return this.commerceService.reviewCommerce({ ...review, user: user.id });
  }

  @Mutation(() => Review)
  async removeReviewCommerce(
    @Args('id', { type: () => String }) id: string,
    @CurrentUser() user,
  ) {
    return this.commerceService.removeReviewCommerce({
      reviewId: id,
      userId: user.id,
    });
  }

  @Mutation(() => Commerce)
  removeImageCommerce(
    @Args('id', { type: () => String }) id: string,
    @Args('idx', { type: () => Int }) idx: number,
  ) {
    return this.commerceService.removeImage(id, idx);
  }

  @UseInterceptors(GraphqlFiles(['stories']))
  @Mutation(() => Commerce)
  addStoriesToProfile(
    @Args('commerceId', { type: () => String }) id: string,
    @Args('stories', { type: () => UploadMedia }) stories,
  ) {
    return this.commerceService.addStories({ commerceId: id, stories });
  }

  @UseInterceptors(GraphqlFiles(['menu']))
  @Mutation(() => Commerce)
  addMenuToProfile(
    @Args('commerceId', { type: () => String }) id: string,
    @Args('menu', { type: () => UploadMedia }) menu,
  ) {
    return this.commerceService.addMenu({ commerceId: id, menu });
  }

  @UseInterceptors(GraphqlFiles(['reviewInput.image']))
  @Mutation(() => Review)
  async reviewCommerceRoom(
    @Args('reviewInput') review: CreateReviewRoomInput,
    @CurrentUser() user,
  ) {
    return this.commerceService.reviewRoom({ ...review, user: user.id });
  }

  @UseInterceptors(GraphqlFiles(['additionInput.addition.icon']))
  @Mutation(() => Commerce)
  async addIncludesToProfile(
    @Args('additionInput') addition: CreateAdditionInput,
  ) {
    return this.commerceService.addIncludes(addition);
  }

  @Public()
  @Query(() => Room)
  async findRoom(
    @Args('id', { type: () => String }) id,
  ) {
    return this.commerceService.findRoom(id);
  }

  @UseInterceptors(GraphqlFiles(['paymentInput.addition.icon']))
  @Mutation(() => Commerce)
  async addPaymentsToProfile(
    @Args('paymentInput') addition: CreateAdditionInput,
  ) {
    return this.commerceService.addPayments(addition);
  }

  @UseInterceptors(GraphqlFiles(['image'], '/targetImages'))
  @Mutation(() => Commerce)
  async addTargetImage(
    @Args('id', { type: () => String }) id: string,
    @Args('image', { type: () => UploadMedia }) image
  ) {
    return this.commerceService.addTargetImage(id, image);
  }

  @Public()
  @Query(() => [Commerce])
  commerceSearch(@Args('searchParams') searchParams: SearchParamsInput) {
    return this.commerceService.search(searchParams);
  }

  @Public()
  @Query(() => [Commerce])
  allDiscover() {
    return this.commerceService.allDiscover();
  }

  @Public()
  @Query(() => [Commerce])
  businessSearch(@Args('searchParams') searchParams: SearchParamsInput) {
    return this.commerceService.businessSearch(searchParams);
  }

  @Public()
  @Query(() => [Commerce])
  discoverSearch(@Args('searchParams') searchParams: SearchParamsInput) {
    return this.commerceService.discoverSearch(searchParams);
  }

  @Mutation(() => Review)
  removeReview(@Args('id', { type: () => String }) id: String,  @CurrentUser() user) {
    return this.commerceService.removeReviewCommerce(id);
  }

  @Mutation(() => Review)
  removeRoomReview(@Args('id', { type: () => String }) id: String,  @CurrentUser() user) {
    return this.commerceService.removeReviewRoom(id);
  }
}
