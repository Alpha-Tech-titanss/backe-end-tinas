import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { File } from 'src/utils/file.schema';

@Schema({ timestamps: true })
@ObjectType()
export class Filter extends Document {
 
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Filter's name" })
  @Prop()
  title: string;

  @Field(() => String, { description: "Filter's icon" })
  @Prop()
  icon: string;

  @Field(() => String, { description: "Filter's thumbnail" })
  @Prop()
  thumbnail: string;

  @Field(() => String, { description: "Filter's description" })
  @Prop()
  description: string;

  @Field(() => String, { description: "Filter's intent url" })
  @Prop()
  intent: string;
  
}

export const FilterSchema = SchemaFactory.createForClass(Filter);