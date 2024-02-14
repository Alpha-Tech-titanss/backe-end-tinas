import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
@ObjectType()
export class Country extends Document {
  @Field(() => String)
  _id;

  @Field(() => String,)
  @Prop({ type: () => String })
  name;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
