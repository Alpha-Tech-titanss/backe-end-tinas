import { ObjectType, Field } from '@nestjs/graphql';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Commerce } from 'src/commerce/entities/base-commerce.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Suggestion extends Document {

    @Field(() => String)
    _id;

    @Field(() => [Commerce], { description: "Commerces" })
    @Prop({ type: [{ type: Types.ObjectId, ref: () => Commerce }], default: [] })
    commerces

    @Field(() => Date)
    @Prop({})
    startTime: Date;
    
    @Field(() => Date)
    @Prop({})
    endTime: Date;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);
