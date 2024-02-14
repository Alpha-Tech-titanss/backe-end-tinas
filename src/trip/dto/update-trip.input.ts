import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTripInput  {
  @Field(() => String)
  id: string;
}
