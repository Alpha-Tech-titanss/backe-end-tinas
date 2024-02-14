import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { UploadMedia } from 'src/utils/file.schema';
import { AdditionInput } from './create-base-commerce.input';

@InputType()
export class CreateDrinkInput {
  @Field(() => String, { description: "Drink's name" })
  name;

  @Field(() => String, { description: "Drink's description" })
  description;

  @Field(() => UploadMedia, { description: "Drink's images" })
  images;

  @Field(() => Float, { description: "Drink's price" })
  price;

  @Field(() => String, { description: "Drink's shop" })
  shop;
}
