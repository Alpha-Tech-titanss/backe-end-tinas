import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFilterInput {
  @Field(() => String, { description: "Filter's name" })
  title: string;

  @Field(() => String, { description: "Filter's icon" })
  icon: string;

  @Field(() => String, { description: "Filter's thumbnail" })
  thumbnail: string;

  @Field(() => String, { description: "Filter's description" })
  description: string;

  @Field(() => String, { description: "Filter's intent url" })
  intent: string;
}
