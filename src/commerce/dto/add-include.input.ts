import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { UploadMedia } from 'src/utils/file.schema';
import { AdditionInput } from './create-base-commerce.input';

@InputType()
export class CreateAdditionInput {
  @Field(() => String, { description: "Commerce's id" })
  commerceId;

  @Field(() => AdditionInput, { description: "Profile's addition" })
  addition;
}
