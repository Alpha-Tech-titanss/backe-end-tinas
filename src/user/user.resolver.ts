import { UseGuards } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ChapterProgress } from "src/progress/entities/progress.entity";
import { TripProgress } from "src/trip/entities/trip.entity";
import { CurrentUser } from "src/utils/guards/current-user.decorator";
import { GqlAuthGuard } from "src/utils/guards/jwt-auth.guard";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@UseGuards(GqlAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async currentUser(@CurrentUser() user) {
    return await this.userService.findByEmail(user.email);
  }

  @Query(() => [User])
  async rankList(
    @Args("start", { type: () => Int, defaultValue: 0 }) start: number,
    @Args("limit", { type: () => Int, defaultValue: 15 }) limit: number
  ) {
    return await this.userService.rankList(start, limit);
  }

  @Query(() => TripProgress)
  getProgress(
    @Args("tripId", { type: () => String }) id: string,
    @CurrentUser() user
  ) {
    return this.userService.getTripProgress(user.id, id);
  }

  @Mutation(() => ChapterProgress)
  updateProgress(
    @Args("palaceId", { type: () => String }) id: string,
    @CurrentUser() user
  ) {
    return this.userService.trackTrip(user.id, id);
  }

  @Mutation(() => User)
  updateDefaultTrip(
    @Args("tripId", { type: () => String }) id: string,
    @CurrentUser() user
  ) {
    return this.userService.updateDefaultTrip(user.id, id);
  }
}
