import { forwardRef, Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotResolver } from './chatbot.resolver';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[ forwardRef(() => UserModule)],
  providers: [ChatbotResolver, ChatbotService]
})
export class ChatbotModule {}
