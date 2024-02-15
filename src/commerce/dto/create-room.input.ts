import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { UploadMedia } from 'src/utils/file.schema';

@InputType()
export class RoomInput {
  @Field(() => String, { description: "Room's name" })
  name;

  @Field(() => String, { description: "Room's description" })
  description;

  @Field(() => UploadMedia, { description: "Room's images" })
  images;

  @Field(() => Int, { description: "Room's capacity" })
  capacity;

  @Field(() => Float, { description: "Room's price" })
  price;

  @Field(() => String, { description: "Room's commerce" })
  commerce;
}
