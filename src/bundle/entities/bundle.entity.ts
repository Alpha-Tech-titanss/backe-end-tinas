import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { File } from 'src/utils/file.schema';

@Schema({ timestamps: true })
@ObjectType()
export class Bundle extends Document {
 
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Bundle's name" })
  @Prop()
  sceneName: string;

  @Field(() => String, { description: "Bundle's description" })
  @Prop()
  description: string;

  @Field(() => File, { description: "Bundle's file" })
  @Prop()
  path: File;
  
}

export const BundleSchema = SchemaFactory.createForClass(Bundle);