import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { Chatbot } from './entities/chatbot.entity';

@UseGuards(GqlAuthGuard)
@Resolver(() => Chatbot)
export class ChatbotResolver {
  constructor() {}
}
