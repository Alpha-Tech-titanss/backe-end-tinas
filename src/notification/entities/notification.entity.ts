import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

@ObjectType()
export class NotificationEvent {
  @Field(() => String)
  message: string;

  @Field(() => String)
  type: string;
}

@Schema({ timestamps: true })
@ObjectType()
export class Notification extends Document {
  @Field(() => String)
  _id;

  //@Field(() => String)
  //@Prop({ default:[] })
  //events
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
