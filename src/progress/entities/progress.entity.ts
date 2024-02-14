import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types  } from 'mongoose';
import { Trip } from 'src/trip/entities/trip.entity';

@ObjectType()
export class PlaceStatus {
  @Field(() => String, { description: 'place ID' })
  id
  @Field(() => Boolean, { description: 'place status' })
  status
}

@Schema({ timestamps: true , strict: false })
@ObjectType()
export class ChapterProgress  {
  
  @Field(() => String, { description: 'ID' })
  _id: string
 
  @Field(() => String, { description: 'chapter ID' })
  @Prop({ default: '' })
  id: string

  @Field(() => [String], { description: 'places done' })
  @Prop({ default: [] })
  places:string[]

  @Field(() => String, { description: 'progree id' })
  @Prop({ default: '' })
  progress: string
}


@Schema({ timestamps: true , strict: false })
@ObjectType()
export class Progress extends Document {

  @Field(() => String, { description: 'ID' })
  _id

  @Field(() => Trip, { description: 'Trip' })
  @Prop({ type: Types.ObjectId, ref: () => Trip })
  trip;
  
  @Field(() => [ChapterProgress], { description: 'Trip' })
  @Prop({ type:[{ type:Types.ObjectId, ref: () => ChapterProgress }]  })
  chapters

  @Field(() => String , { description: 'UserId' })
  @Prop({ default: '' })
  userId: string

  @Field(() => [String], { description: 'places done' })
  @Prop({ default: [] })
  placesId:string[]

}

export const ProgressSchema = SchemaFactory.createForClass(Progress);
export const ChapterProgressSchema = SchemaFactory.createForClass(ChapterProgress);

