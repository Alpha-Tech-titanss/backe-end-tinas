import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Notification } from 'src/notification/entities/notification.entity';
import { Progress } from 'src/progress/entities/progress.entity';
import { Trip } from 'src/trip/entities/trip.entity';
import { File } from 'src/utils/file.schema';

@ObjectType()
export class Message {

  @Field(() => String)
  userId

  @Field(() => String)
  content

}


@Schema({ timestamps: true })
@ObjectType()
export class User extends Document {
  @Field(() => String)
  _id;

  @Field(() => String)
  @Prop()
  username: string;

  @Field(() => String)
  @Prop({ unique: true })
  email: string;

  @Prop({ default: null })
  password: string;

  @Field(() => Int)
  @Prop()
  achievements: number;

  @Field(() => Boolean)
  @Prop({ default: false })
  banned: boolean;

  @Field(() => Boolean)
  @Prop({ default: false })
  EmailConfirmation: boolean;

  @Field(() => Notification, { description: 'Notification' })
  @Prop({ type: Types.ObjectId, ref: () => Notification })
  notification;
  
  @Field(() => Trip, { description: 'Selected Trip' })
  @Prop({ type: Types.ObjectId, ref: () => Trip })
  selectedTrip;

  @Field(() => [Progress], { description: 'Trips' })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Progress }] , default:[] })
  progress;
  
  @Field(() => File, { description: 'Picture' })
  @Prop({ type: File })
  picture;

  @Field(() => [Message] , { description: "Conversation"})
  @Prop({ default:[] })
  conversationBot: Message[]

  @Field(() => Int)
  @Prop({ default: 0 })
  points: number;

  @Field(() => Date)
  createdAt;

  @Field(() => [String])
  @Prop()
  specialTrips: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
