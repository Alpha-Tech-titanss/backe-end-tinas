import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DefaultConfigService } from './default-config.service';
import { CreateDefaultConfigInput } from './dto/create-default-config.input';
import { DefaultConfig } from './entities/default-config.entity';

@Resolver(() => DefaultConfig)
export class DefaultConfigResolver {
  constructor(private readonly defaultConfigService: DefaultConfigService) {}

  @Mutation(() => DefaultConfig)
  createDefaultConfig(
    @Args('createDefaultConfigInput')
    createDefaultConfigInput: CreateDefaultConfigInput,
  ) {
    return this.defaultConfigService.create(createDefaultConfigInput);
  }

}
