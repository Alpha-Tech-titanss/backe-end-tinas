import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { save } from './storage';

export const uploadContent = async (uploadMedia , subfolder ) => {
  if (uploadMedia.files || uploadMedia.urls) {
    const images = [];

    if (uploadMedia.files)
      for (let file of uploadMedia.files) {
        images.push(
          await save(file, subfolder )
            .then(f => (file = f))
            .catch(e => console.log(e)),
        );
      }

    if (uploadMedia.urls)
      for (const url of uploadMedia.urls) {
        images.push({ name: '', type: 'External', url: url });
      }

    uploadMedia = images;
  } else if (uploadMedia.file) {
    uploadMedia = await save(uploadMedia.file, subfolder ).then(f => f);
  } else if (uploadMedia.url) {
    uploadMedia = { name: '', type: 'External', url: uploadMedia.url };
  }

  return uploadMedia;
};

@ObjectType()
export class File {
  @Field(() => String)
  name;

  @Field(() => String)
  url;

  @Field(() => String)
  type;
}

@InputType()
export class UploadMedia {
  @Field(() => [GraphQLUpload], { nullable: true })
  files;

  @Field(() => GraphQLUpload, { nullable: true })
  file;

  @Field(() => String, { nullable: true })
  url;

  @Field(() => [String], { nullable: true })
  urls;
}
