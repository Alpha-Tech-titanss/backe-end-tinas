import { InputType, Int, Field } from '@nestjs/graphql';
import { UploadMedia } from 'src/utils/file.schema';

@InputType()
export class CreateModelInput {

  @Field(() => String, { description: "Model's name" })
  title: string;

  @Field(() => String, { description: "Model's thumbnail" })
  thumbnail: string;

  @Field(() => UploadMedia, { description: "Model's file" })
  file
}
