import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Review } from 'src/review/entities/review.entity';
import { File } from 'src/utils/file.schema';
import { Addition } from '../commerce.entity';
import { CommerceType } from '../commerce.enum';
import { Dish } from '../items/dish.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Restaurant extends Document {
  @Field(() => String)
  _id;

  @Field(() => [File], { description: "Restaurant's stories" })
  @Prop({ default: [] })
  stories: File[];

  @Field(() => [Dish], { description: "Restaurant's dishs" })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Dish }], default: [] })
  menu;

  @Field(() => [File], { description: "Menu Images" })
  @Prop({default: [] })
  menuRaw: File[];

  @Field(() => [Addition], { description: "Restaurant's includes" })
  @Prop({ default: [] })
  includes: Addition[];

  @Field(() => [Addition], { description: "Restaurant's payments" })
  @Prop({ default: [] })
  payments: Addition[];

  @Prop({ type: String, enum: CommerceType, default: CommerceType.Restaurant })
  ObjecType;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
