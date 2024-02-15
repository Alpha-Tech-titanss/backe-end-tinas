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
import { Dish } from './dish.entity';

@Schema({ timestamps: true })
@ObjectType()
export class DishCategory extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Category's name" })
  @Prop()
  name: string;

  @Field(() => File, { description: "Category's icon" })
  @Prop()
  icon: File;

  @Field(() => String, { description: "Category's description" })
  @Prop()
  description: string;

  @Field(() => [Dish], { description: "Category's dishs" })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Dish }], default: [] })
  dishs;
}

export const DishCategorySchema = SchemaFactory.createForClass(DishCategory);
