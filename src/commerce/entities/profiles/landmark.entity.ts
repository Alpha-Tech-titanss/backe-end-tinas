import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Addition } from '../commerce.entity';
import { CommerceType } from '../commerce.enum';

@Schema({ timestamps: true })
@ObjectType()
export class Landmark extends Document {
  @Field(() => String)
  _id;

  @Field(() => [Addition], { description: "Bar's includes" })
  @Prop({ default: [] })
  includes: Addition[];

  @Field(() => [Addition], { description: "Bar's payments" })
  @Prop({ default: [] })
  payments: Addition[];

  @Prop({ type: String, enum: CommerceType, default: CommerceType.Landmark })
  ObjecType;
}

export const LandmarkSchema = SchemaFactory.createForClass(Landmark);
