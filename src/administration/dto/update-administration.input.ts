import { CreateAdministrationInput } from './create-administration.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdministrationInput extends PartialType(
  CreateAdministrationInput,
) {
  @Field(() => Int)
  id: number;
}
