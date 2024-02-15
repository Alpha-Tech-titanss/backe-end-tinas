import { Field, ObjectType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Addition } from '../commerce.entity';
import { CommerceType } from '../commerce.enum';
import { Drink } from '../items/drink.entity';
import { File } from 'src/utils/file.schema';
import { Room } from '../items/room.entity';

@Schema({ timestamps: true })
@ObjectType()
export class GuestHouse extends Document {
  @Field(() => String)
  _id;

  @Field(() => [File], { description: "Guesthouse's stories" })
  @Prop({ default: [] })
  stories: File[];

  @Field(() => [Room], { description: "Guesthouse's rooms" })
  @Prop({ type: [{ type: Types.ObjectId, ref: () => Room }], default: [] })
  rooms;

  @Field(() => [Addition], { description: "Guesthouse's includes" })
  @Prop({ default: [] })
  includes: Addition[];

  @Field(() => [Addition], { description: "Guesthouse's payments" })
  @Prop({ default: [] })
  payments: Addition[];

  @Prop({ type: String, enum: CommerceType, default: CommerceType.GuestHouse })
  ObjecType;
}

export const GuestHouseSchema = SchemaFactory.createForClass(GuestHouse);
