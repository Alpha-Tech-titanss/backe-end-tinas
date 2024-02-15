import { ObjectType, Field, Int, createUnionType } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

enum reporType {
  FakeIdentity = 'FakeIdentity' ,
  Spam = 'Spam' ,
  FalseInformation = 'FalseInformation' ,
  Harassment = 'Harassment'
}

@Schema({ timestamps: true })
@ObjectType()
export class Report extends Document {
  @Field(() => String)
  _id: string;

  @Field(() => User )
  @Prop({ type: Types.ObjectId , ref: () => User })
  reporter
  
  @Field(() => User )
  @Prop({ type: Types.ObjectId , ref: () => User })
  reported

  @Field(() => String , { description: 'type of report' })
  @Prop({ type: String, required: true, enum: reporType })
  type

  @Field(() => String)
  @Prop()
  reason: string

}
/*
export const ReportParty = createUnionType({
  name: 'ReportParty',
  types: () => [Client, Store],
  resolveType(value) {
    if (value.image) {
      return Client;
    }
    if (value.logo) {
      return Store;
    }
    return null;
  },
});
*/
export const ReportSchema = SchemaFactory.createForClass(Report);

