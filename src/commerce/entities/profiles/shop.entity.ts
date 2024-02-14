import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommerceType } from '../commerce.enum';

@Schema({ timestamps: true })
@ObjectType()
export class Shop extends Document {
  @Field(() => String)
  _id;

  @Prop({ type: String, enum: CommerceType, default: CommerceType.Shop })
  ObjecType;
}

export const ShopSchema = SchemaFactory.createForClass(Shop);
