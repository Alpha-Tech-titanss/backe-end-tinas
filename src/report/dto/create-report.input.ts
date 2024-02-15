import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReportInput {

  @Field(() => String, { description: 'Reported id' })
  reported: string;

  @Field(() => String, { description: 'Report type' })
  type: string;

  @Field(() => String, { description: 'Reporting reason' })
  reason: string;
}
