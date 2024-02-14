import { ObjectType, Field, Int, createUnionType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

enum trackType {
  Recommendation = 'Recommendation' ,
  Commerce = 'Commerce' ,
}

@Schema({ timestamps: true })
@ObjectType()
export class Track extends Document {
  
  @Field(() => String)
  _id: string;

  @Field(() => String , { description: 'type of track' })
  @Prop({ type: String, required: true, enum: trackType })
  type

  @Field(() => String)
  @Prop()
  targetId: string

  @Field(() => Int)
  @Prop()
  timeSpent: number

}

export const TrackSchema = SchemaFactory.createForClass(Track);
