import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
@ObjectType()
export class Supplier extends Document {
  @Field(() => String)
  _id;

  @Field(() => String)
  @Prop({})
  thumbnail: String;

  @Field(() => String)
  @Prop({})
  name: string;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
