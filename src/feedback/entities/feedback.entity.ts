import { ObjectType, Field, Int, createUnionType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

enum reporType {
  AccessIssue = 'AccessIssue' ,
  TechnicalIssue = 'TechnicalIssue' ,
  TripIssue = 'TripIssue' ,
  Other = 'Other' ,
  Feedback = 'Feedback'
}

@Schema({ timestamps: true })
@ObjectType()
export class Feedback extends Document {
  @Field(() => String)
  _id: string;

  @Field(() => User )
  @Prop({ type: Types.ObjectId , ref: () => User })
  reporter
  
  @Field(() => String , { description: 'type of report' })
  @Prop({ type: String, required: true, enum: reporType })
  type

  @Field(() => String)
  @Prop()
  feedback: string

}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
