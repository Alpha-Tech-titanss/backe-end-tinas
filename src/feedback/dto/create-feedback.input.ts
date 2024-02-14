import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
  @Field(() => String, { description: 'Report type' })
  type: string;

  @Field(() => String, { description: 'Reporting reason' })
  feedback: string;
}
