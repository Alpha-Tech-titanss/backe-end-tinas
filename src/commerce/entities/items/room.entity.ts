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
import { Addition } from '../commerce.entity';
import { Review } from 'src/review/entities/review.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Room extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Room's name" })
  @Prop()
  name: string;

  @Field(() => String, { description: "Room's description" })
  @Prop()
  description: string;

  @Field(() => [File], { description: "Room's images" })
  @Prop()
  images: File[];

  @Field(() => Float, { description: "Room's rating" })
  @Prop({ default: 0 })
  rate: number;

  @Field(() => Int, { description: "Room's capacity" })
  @Prop({ default: 0 })
  capacity: number;

  @Field(() => Float, { description: "Room's price" })
  @Prop({ default: 0 })
  price: number;

  @Field(() => [Addition], { description: "Room's includes" })
  @Prop({ default: [] })
  includes: Addition[];

  @Field(() => Commerce, { description: "Room's commerce" })
  @Prop({ type: Types.ObjectId, ref: () => Commerce })
  commerce;

  @Field(() => [Review], { description: "Room's reviews" })
  @Prop({ type: [{ type:Types.ObjectId, ref: () => Review }] , default: [] })
  reviews

  /*
  @Field(() => DishCategory, { description: 'Drink\'s category' })
  @Prop({ type: Types.ObjectId, ref: () => DishCategory })
  category*/
}

export const RoomSchema = SchemaFactory.createForClass(Room);
