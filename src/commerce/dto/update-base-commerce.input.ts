import {
  CreateBaseCommerceInput,
  OpeningTimeInput,
  PositionInput,
} from './create-base-commerce.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UploadMedia } from 'src/utils/file.schema';

@InputType()
export class UpdateBaseCommerceInput {
  @Field(() => String)
  id;

  @Field(() => String, { description: "Commerce's name", nullable: true })
  name;

  @Field(() => String, {
    description: "Commerce's description",
    nullable: true,
  })
  description;

  @Field(() => String, { description: "Commerce's telephone", nullable: true })
  tel;

  @Field(() => String, { description: "Commerce's address", nullable: true })
  address;

  @Field(() => UploadMedia, {
    description: "Commerce's images",
    nullable: true,
  })
  images;

  @Field(() => OpeningTimeInput, {
    description: "Commerce's opening time",
    nullable: true,
  })
  openingTime;

  @Field(() => PositionInput, {
    description: "Commerce's postion",
    nullable: true,
  })
  position;
}
