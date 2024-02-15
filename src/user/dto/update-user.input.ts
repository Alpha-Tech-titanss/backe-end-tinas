import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  type: string;

  @Field(() => String)
  targetId: string;

  @Field(() => Int)
  timeSpent: number;
}
