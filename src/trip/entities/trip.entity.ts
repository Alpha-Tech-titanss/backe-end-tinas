import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Chapter } from "./chapter.entity";
import { Place } from "./place.entity";
import { Supplier } from "../../supplier/entities/supplier.entity";
import { Country } from "src/meta-data/entities/country.entity";

@Schema({ timestamps: true })
@ObjectType()
export class Trip extends Document {
  @Field(() => String)
  _id;

  @Field(() => [Chapter])
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Chapter }], default: [] })
  chapters;

  @Field(() => String)
  @Prop({})
  name: string;

  @Field(() => String)
  @Prop({})
  estimatedTime: string;

  @Field(() => String)
  @Prop({})
  pricing: string;

  @Field(() => Boolean)
  @Prop({ default: false })
  isSpecial: boolean;

  @Field(() => [Supplier])
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Supplier }], default: [] })
  suppliers: Supplier[];

  @Field(() => Country)
  @Prop({type:Types.ObjectId})
  country: string;
}

export const TripSchema = SchemaFactory.createForClass(Trip);

@ObjectType()
export class TripProgress extends Trip {
  @Field(() => [TripChapterProgress])
  chapters;

  @Field(() => Float)
  progress: number;
}

@ObjectType()
export class TripChapterProgress extends Chapter {
  @Field(() => [PlaceProgress])
  places;

  @Field(() => Float)
  progress: number;
}

@ObjectType()
export class PlaceProgress extends Place {
  @Field(() => Boolean)
  done;
}
