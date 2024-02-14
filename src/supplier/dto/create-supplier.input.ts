import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SupplierInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  thumbnail: string;
}
