import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { UpdateStatInput } from './dto/update-stat.input';
import { Stat } from './entities/stat.entity';
import { StatsService } from './stats.service';

@Resolver(() => Stat)
export class StatsResolver {
  constructor(private readonly statsService: StatsService) {}

  @Query(() => [Stat], { name: 'stats' })
  findAll() {
    return this.statsService.findAll();
  }

  @Query(() => Stat, { name: 'stat' })
  findOne(@Args('userId', { type: () => String }) id: string) {
    return this.statsService.findOne(id);
  }

  @Mutation(() => Stat)
  updateStat(@Args('updateStatInput') updateStatInput: UpdateStatInput, @CurrentUser() user) {
    return this.statsService.track(user.id, updateStatInput);
  }

}
