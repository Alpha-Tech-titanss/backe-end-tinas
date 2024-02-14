import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdministrationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
