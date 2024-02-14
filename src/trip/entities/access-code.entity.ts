import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
@ObjectType()
export class AccessCode extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { nullable: true })
  @Prop({ default: null, type: () => String })
  tripId;

  @Field(() => String, { nullable: true })
  @Prop({})
  code: string;

  @Field(() => String, { nullable: true })
  @Prop({})
  qrCode: string;
}

export const AccessCodeSchema = SchemaFactory.createForClass(AccessCode);
