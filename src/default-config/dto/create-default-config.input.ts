import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDefaultConfigInput {
  @Field(() => String)
  defaultSelectedTripId: string;
}
