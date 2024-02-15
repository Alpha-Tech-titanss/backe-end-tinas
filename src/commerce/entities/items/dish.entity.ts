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
export class Dish extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Dish's name" })
  @Prop()
  name: string;

  @Field(() => String, { description: "Dish's description" })
  @Prop()
  description: string;

  @Field(() => [File], { description: "Dish's images" })
  @Prop()
  images: File[];

  @Field(() => Float, { description: "Dish's rating" })
  @Prop({ default: 0 })
  rate: number;

  @Field(() => Float, { description: "Dish's price" })
  @Prop({ default: 0 })
  price: number;

  @Field(() => Commerce, { description: "Dish's resturant" })
  @Prop({ type: Types.ObjectId, ref: () => Commerce })
  restaurant;

  @Field(() => DishCategory, { description: "Dish's category" })
  @Prop({ type: Types.ObjectId, ref: () => DishCategory })
  category;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
