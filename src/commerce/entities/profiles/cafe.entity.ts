import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Addition } from '../commerce.entity';
import { CommerceType } from '../commerce.enum';
import { Drink } from '../items/drink.entity';
import { File } from 'src/utils/file.schema';

@Schema({ timestamps: true })
@ObjectType()
export class Cafe extends Document {
  @Field(() => String)
  _id;

  @Field(() => [File], { description: "Bar's stories" })
  @Prop({ default: [] })
  stories: File[];

  @Field(() => [Drink], { description: "Bar's drinks" })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Drink }], default: [] })
  menu;

  @Field(() => [File], { description: "Menu Images" })
  @Prop({default: [] })
  menuRaw: File[];

  @Field(() => [Addition], { description: "Bar's includes" })
  @Prop({ default: [] })
  includes: Addition[];

  @Field(() => [Addition], { description: "Bar's payments" })
  @Prop({ default: [] })
  payments: Addition[];

  @Prop({ type: String, enum: CommerceType, default: CommerceType.Cafe })
  ObjecType;
}

export const CafeSchema = SchemaFactory.createForClass(Cafe);
