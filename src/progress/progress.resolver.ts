import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { PlaceStatus, Progress } from './entities/progress.entity';
import { ProgressService } from './progress.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Progress)
export class ProgressResolver {
  constructor(private readonly progressService: ProgressService) {}
  /*
  @Mutation(() => Progress)
  createProgress(@Args('createProgressInput') createProgressInput: CreateProgressInput) {
    return this.progressService.create(createProgressInput);
  }

  @Query(() => [Progress], { name: 'progress' })
  findAll() {
    return this.progressService.findAll();
  }

  @Query(() => Progress, { name: 'progress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.progressService.findOne(id);
  }

  @Mutation(() => Progress)
  updateProgress(@Args('updateProgressInput') updateProgressInput: UpdateProgressInput) {
    return this.progressService.update(updateProgressInput.id, updateProgressInput);
  }

  @Mutation(() => Progress)
  removeProgress(@Args('id', { type: () => Int }) id: number) {
    return this.progressService.remove(id);
  }*/

  @Query(() => PlaceStatus, { name: 'getPlaceStatus' })
  getPlaceStatus(@Args('tripId', { type: () => String }) tripId : string , @Args('placeId', { type: () => String }) placeId : string , @CurrentUser() user ) {
    return this.progressService.getPlaceStatus(user.id, tripId , placeId);
  }

}
