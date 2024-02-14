import { ChatBotMessage } from './create-chatbot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChatbotInput extends PartialType(ChatBotMessage) {
  @Field(() => Int)
  id: number;
}
