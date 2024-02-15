import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Bundle } from 'src/bundle/entities/bundle.entity';
import { Postion } from 'src/commerce/entities/commerce.entity';
import { File } from 'src/utils/file.schema';

@ObjectType()
class Gallery {

  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => [File], { description: "Place's images" })
  photos: File[]

}

@Schema({ timestamps: true })
@ObjectType()
export class Place extends Document {
  
  @Field(() => String)
  _id;

  @Field(() => File)
  @Prop({})
  thumbnail: File

  @Field(() => String)
  @Prop({})
  name: string

  @Field(() => [Gallery], { description: "Place's images" })
  @Prop({ default: [] })
  images: Gallery[];

  @Field(() => Postion, { description: "Place's postion" })
  @Prop()
  position: Postion;

  @Field(() => String)
  @Prop({})
  discription: string

  @Field(() => String)
  @Prop({})
  estimatedTime: string

  @Field(() => [File])
  @Prop({})
  audio: File[]

  @Field(() => Bundle)
  @Prop({ type: Types.ObjectId, ref: () => Bundle })
  bundle;

}

export const PlaceSchema = SchemaFactory.createForClass(Place);
