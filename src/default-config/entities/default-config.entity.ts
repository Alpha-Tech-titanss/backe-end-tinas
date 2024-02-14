import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class DefaultConfig extends Document {
  
  @Field(() => String)
  _id;
  @Field(() => String)
  @Prop({})
  defaultSelectedTripId: string;
  
}
export const DefaultConfigSchema = SchemaFactory.createForClass(DefaultConfig);
