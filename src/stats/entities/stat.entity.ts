import { ObjectType, Field, Int, createUnionType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import { Track } from './track.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Stat extends Document {
  
  @Field(() => String)
  _id: string;

  @Field(() => User )
  @Prop({ type: Types.ObjectId , ref: () => User })
  user

  @Field(() => Track )
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Track }] , default:[] })
  tracks

  @Field(() => Int)
  @Prop()
  timeSpent: number

}

export const StatSchema = SchemaFactory.createForClass(Stat);
