import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { File } from 'src/utils/file.schema';

@Schema({ timestamps: true })
@ObjectType()
export class Model extends Document {
 
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Model's name" })
  @Prop()
  title: string;

  @Field(() => String, { description: "Model's thumbnail" })
  @Prop()
  thumbnail: string;

  @Field(() => File, { description: "Model's file" })
  @Prop()
  file: File;
  
}

export const ModelSchema = SchemaFactory.createForClass(Model);