import {
  ObjectType,
  Field,
  Int,
  Float,
  createUnionType,
} from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { File } from 'src/utils/file.schema';
import { Document, Types } from 'mongoose';
import { Commerce } from '../base-commerce.entity';
import { DishCategory } from './category.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Drink extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Drink's name" })
  @Prop()
  name: string;

  @Field(() => String, { description: "Drink's description" })
  @Prop()
  description: string;

  @Field(() => [File], { description: "Drink's images" })
  @Prop()
  images: File[];

  @Field(() => Float, { description: "Drink's rating" })
  @Prop({ default: 0 })
  rate: number;

  @Field(() => Float, { description: "Drink's price" })
  @Prop({ default: 0 })
  price: number;

  @Field(() => Commerce, { description: "Drink's shop" })
  @Prop({ type: Types.ObjectId, ref: () => Commerce })
  shop;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);
