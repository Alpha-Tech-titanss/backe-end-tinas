import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSuggestion } from './dto/add-suggestion.input';
import { Suggestion } from './entities/suggestion.entity';
import { SuggestionService } from './suggestion.service';

@Resolver()
export class SuggestionResolver {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Mutation(() => Suggestion)
  async addSuggestion(
    @Args('addSuggestion') input: CreateSuggestion,
  ) {
    return this.suggestionService.create(input);
  }

  @Mutation(() => Suggestion)
  async removeSuggestion(
    @Args('id', { type: () => String }) id: string,
  ) {
    return this.suggestionService.delete(id);
  }

  @Query(() => Suggestion ,{ nullable: true })
  getSuggestions() {
    return this.suggestionService.getSuggestions();
  }
}
