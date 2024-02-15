import {
  ObjectType,
  Field,
  Float,
} from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { File } from 'src/utils/file.schema';
import { Document, Types } from 'mongoose';
import { OpeningTime, Postion, Profile } from './commerce.entity';
import { DetailRating, Review } from 'src/review/entities/review.entity';
import { CollectionType, CommerceType } from './commerce.enum';

class PostionType {
  longitude: number;
  latitude: number;
}


class OpeningTimeType {
  startTime: Date;
  startDay: string;
  endtTime: Date;
  endtDay: string;
}

@Schema({ timestamps: true , strict: false })
@ObjectType()
export class Commerce extends Document {
  @Field(() => String)
  _id;

  @Field(() => String, { description: "Commerce's name" })
  @Prop()
  name: string;

  @Field(() => String, { description: "Commerce's description" })
  @Prop()
  description: string;

  @Field(() => String, { description: "Commerce's telephone" })
  @Prop()
  tel: string;

  @Field(() => String, { description: "Commerce's address" })
  @Prop()
  address: string;

  @Field(() => [File], { description: "Commerce's images" })
  //@ts-ignore
  @Prop({ default: [] })
  images: File[];

  @Field(() => Float, { description: "Commerce's rating" })
  @Prop({ default: 0 })
  generalRating: number;

  @Field(() => DetailRating, { description: "Commerce's rating" })
  @Prop({ default: { food: 0, hospitality: 0, comfortability: 0, atmosphere: 0 } })
  generalDetailRating: DetailRating;

  @Field(() => OpeningTime, { description: "Commerce's opening time" })
  @Prop({})
  openingTime: OpeningTimeType ;

  @Field(() => Postion, { description: "Commerce's postion" })
  @Prop({})
  position: PostionType;
  
  @Field(() => String, { description: "Commerce's type" })
  @Prop({ type: String, enum: CommerceType, default: CommerceType.Restaurant })
  type;

  @Field(() => String, { description: "Commerce's type" })
  @Prop({ type: String, enum: CollectionType, default: CollectionType.Business })
  collectionType;

  @Field(() => Profile, { description: "Commerce's Profile" })
  @Prop({ type: Types.ObjectId, refPath: 'type' })
  profile;

  @Field(() => [Review], { description: "Commerce's reviews" })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Review }], default: [] })
  reviews;

  @Field(() => File, { description: "Commerce's AI image" })
  @Prop({})
  targetImage: File

  @Field(() => Boolean, { description: "Commerce's reserveable" })
  @Prop({ default: false })
  isReservable: boolean
}

export const CommerceSchema = SchemaFactory.createForClass(Commerce);
