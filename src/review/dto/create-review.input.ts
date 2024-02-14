import { InputType, Int, Field, Float, PartialType } from '@nestjs/graphql';
import { UploadMedia } from 'src/utils/file.schema';
import { DetailRating } from '../entities/review.entity';

@InputType()
class DetailRatingInput {
  @Field(() => Int)
  food: number 

  @Field(() => Int)
  hospitality: number

  @Field(() => Int)
  comfortability: number

  @Field(() => Int)
  atmosphere: number
}

@InputType()
export class CreateReviewInput {
  @Field(() => String)
  commerceId;

  @Field(() => String)
  feedback;

  @Field(() => Float)
  rating;

  @Field(() => UploadMedia, { description: "Review's media", nullable: true })
  image;

  @Field(() => DetailRatingInput , { description: "Review's media" })
  detailRating;

}

@InputType()
export class CreateReviewRoomInput {
  @Field(() => String)
  roomId;

  @Field(() => String)
  feedback;

  @Field(() => Float)
  rating;

  @Field(() => UploadMedia, { description: "Review's media", nullable: true })
  image;

  @Field(() => DetailRatingInput , { description: "Review's media" })
  detailRating;

}