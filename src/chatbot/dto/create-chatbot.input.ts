import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class ChatBotMessage {

  @Field(() => String, { description: 'message content' })
  text: string;

}
