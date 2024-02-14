import { UseGuards, UseInterceptors } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GraphqlFiles } from "src/utils/file.interceptor";
import { CurrentUser } from "src/utils/guards/current-user.decorator";
import { GqlAuthGuard } from "src/utils/guards/jwt-auth.guard";
import {
  AddChapterInput,
  AddPlaceInput,
  ApplyAccessCodeInput,
  CreateAccessCodeInput,
  PlaceGalleryInput,
  SearchAccessCodeInput,
  TripInput,
} from "./dto/create-trip.input";
import { UpdateTripInput } from "./dto/update-trip.input";
import { AccessCode } from "./entities/access-code.entity";
import { Chapter } from "./entities/chapter.entity";
import { Place } from "./entities/place.entity";
import { Trip } from "./entities/trip.entity";
import { TripService } from "./trip.service";
import { RoleGuard } from "src/utils/guards/role.guard";
import { Roles } from "src/utils/guards/roles.decorator";

@Resolver(() => Trip)
export class TripResolver {
  constructor(private readonly tripService: TripService) {}

  @Mutation(() => Trip)
  createTrip(@Args("tripInput") tripInput: TripInput) {
    return this.tripService.createTrip(tripInput);
  }

  // @UseInterceptors(GraphqlFiles(['addChapterInput.chapter.thumbnail']))
  @Mutation(() => Trip)
  addChapter(@Args("addChapterInput") chapterInput: AddChapterInput) {
    return this.tripService.addChapter(chapterInput);
  }

  @UseInterceptors(
    GraphqlFiles(["addPlaceInput.place.thumbnail", "addPlaceInput.place.audio"])
  )
  @Mutation(() => Trip)
  addPlace(@Args("addPlaceInput") placeInput: AddPlaceInput) {
    return this.tripService.addPlace(placeInput);
  }

  @Query(() => [Trip], { name: "trip" })
  findAll() {
    return this.tripService.findAll();
  }
  @UseGuards(GqlAuthGuard)
  @Query(() => Trip)
  findOneTrip(
    @CurrentUser() user,

    @Args("id", { type: () => String }) id: string
  ) {
    return this.tripService.findOne(id, user);
  }

  @Query(() => Chapter)
  findOneChapter(@Args("id", { type: () => String }) id: string) {
    return this.tripService.findOneChapter(id);
  }

  @Query(() => Place)
  findOnePlace(@Args("id", { type: () => String }) id: string) {
    return this.tripService.findOnePlace(id);
  }

  @Mutation(() => Trip)
  updateTrip(@Args("updateTripInput") updateTripInput: UpdateTripInput) {
    return this.tripService.update(updateTripInput.id, updateTripInput);
  }

  @Mutation(() => Trip)
  removeTrip(@Args("id", { type: () => String }) id: string) {
    return this.tripService.remove(id);
  }

  @Mutation(() => Trip)
  removeChapter(@Args("id", { type: () => String }) id: string) {
    return this.tripService.removeChapter(id);
  }

  @Mutation(() => Trip)
  removePlace(@Args("id", { type: () => String }) id: string) {
    return this.tripService.removePlace(id);
  }

  @UseInterceptors(GraphqlFiles(["placeGalleryInput.photos"]))
  @Mutation(() => Trip)
  addImageToPlaceGallery(
    @Args("id", { type: () => String }) id: string,
    @Args("placeGalleryInput") placeGalleryInput: PlaceGalleryInput
  ) {
    return this.tripService.addImageToPlace(id, placeGalleryInput);
  }

  @Mutation(() => [AccessCode])
  createTripAccessCode(
    @Args("tripAccessCodeInput") tripAccessCodeInput: CreateAccessCodeInput
  ) {
    return this.tripService.createAccessCode(tripAccessCodeInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  applyTripAccessCode(
    @CurrentUser() user,
    @Args("applyAccessCodeInput") applyAccessCodeInput: ApplyAccessCodeInput
  ) {
    return this.tripService.applyTripAccessCode(applyAccessCodeInput, user);
  }

  // @UseGuards()
  // @Roles('admin')
  @UseGuards(GqlAuthGuard)
  @Query(() => [AccessCode],{nullable:'itemsAndList'})
  getAllTripsAccessCodes(@CurrentUser() user) {
    return this.tripService.getAllTripsAccessCodes();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => AccessCode)
  searchAccessCode(
    @CurrentUser() user,
    @Args("searchAccessCodeInput") searchAccessCodeInput: SearchAccessCodeInput
  ) {
    return this.tripService.searchAccessCode(searchAccessCodeInput, user);
  }
}
