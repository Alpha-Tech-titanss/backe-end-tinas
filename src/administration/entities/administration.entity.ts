import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Administration {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
