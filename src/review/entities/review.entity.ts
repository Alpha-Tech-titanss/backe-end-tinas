import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { File } from 'src/utils/file.schema';

@ObjectType()
export class DetailRating {

  @Field(() => Int)
  food: number 

  @Field(() => Int)
  hospitality: number

  @Field(() => Int)
  comfortability: number

  @Field(() => Int)
  atmosphere: number

}

@Schema({ timestamps: true , strict: true })
@ObjectType()
export class Review extends Document {
  @Field(() => String)
  _id;

  @Field(() => String)
  @Prop()
  feedback: string;

  @Field(() => Float)
  @Prop()
  rating: number;

  @Field(() => User)
  @Prop({ type: Types.ObjectId, ref: () => User })
  user;

  @Field(() => File, { description: "Review's media", nullable: true })
  @Prop()
  image: File;

  @Field(() => DetailRating, { description: "Review's Detail Rating", nullable: true })
  @Prop()
  travlerRating: DetailRating;

  @Field(() => String, { description: "Reviewed item ID", nullable: true })
  @Prop()
  reviewed: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
