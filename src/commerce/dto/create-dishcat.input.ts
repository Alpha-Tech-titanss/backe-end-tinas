import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { UploadMedia } from 'src/utils/file.schema';
import { AdditionInput } from './create-base-commerce.input';

@InputType()
export class DishCategoryInput {
  @Field(() => String, { description: "Category's name" })
  name;

  @Field(() => UploadMedia, { description: "Category's icon" })
  icon;

  @Field(() => String, { description: "Category's description" })
  description;
}
