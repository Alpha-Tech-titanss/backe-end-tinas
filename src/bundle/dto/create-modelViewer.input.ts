import { InputType, Int, Field } from '@nestjs/graphql';
import { UploadMedia } from 'src/utils/file.schema';

@InputType()
export class CreateModelViewerInput {
  @Field(() => String, { description: "ModelViewer's title" })
  title: string;

  @Field(() => String, { description: "ModelViewer's subtitle" })
  subtitle: string;

  @Field(() => String, { description: "ModelViewer's description" })
  description: string;

  @Field(() => String, { description: "ModelViewer's thumbnail" })
  thumbnail: string;

  @Field(() => UploadMedia, { description: "ModelViewer's file" })
  file;
}
