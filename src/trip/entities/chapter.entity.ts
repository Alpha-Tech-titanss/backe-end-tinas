import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { File } from 'src/utils/file.schema';
import { Place } from './place.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Chapter extends Document {
  
  @Field(() => String)
  _id;

  @Field(() => [Place])
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Place }], default: [] })
  places;

  @Field(() => File)
  @Prop({})
  thumbnail: File

  @Field(() => String)
  @Prop({})
  name: string

  @Field(() => String)
  @Prop({})
  estimatedTime: string

}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);
