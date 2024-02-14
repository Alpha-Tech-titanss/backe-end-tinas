import { forwardRef, Module } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { SuggestionResolver } from './suggestion.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { SuggestionSchema, Suggestion } from './entities/suggestion.entity';
import { BaseCommerceModule } from 'src/commerce/commerce.module';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: Suggestion.name, schema: SuggestionSchema },
    ]),
    forwardRef(() => BaseCommerceModule )
  ],
  providers: [SuggestionResolver, SuggestionService]
})
export class SuggestionModule { }
