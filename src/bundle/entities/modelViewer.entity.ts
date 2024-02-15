import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { File } from 'src/utils/file.schema';

@Schema({ timestamps: true })
@ObjectType()
export class ModelViewer extends Document {
 
  @Field(() => String)
  _id;

  @Field(() => String, { description: "ModelViewer's title" })
  @Prop()
  title: string;

  @Field(() => String, { description: "ModelViewer's subtitle" })
  @Prop()
  subtitle: string;

  @Field(() => String, { description: "ModelViewer's description" })
  @Prop()
  description: string;

  @Field(() => String, { description: "ModelViewer's thumbnail" })
  @Prop()
  thumbnail: string;

  @Field(() => File, { description: "ModelViewer's file" })
  @Prop()
  file: File;
  
}

export const ModelViewerSchema = SchemaFactory.createForClass(ModelViewer);