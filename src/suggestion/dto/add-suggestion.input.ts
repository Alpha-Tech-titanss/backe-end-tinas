import { InputType, Int, Field, Float } from '@nestjs/graphql';


@InputType()
export class CreateSuggestion {
    
    @Field(() => Date)
    startTime: Date;
  
    @Field(() => Date)
    endTime: Date;
  
    @Field(() => [String])
    commerces
  
}
