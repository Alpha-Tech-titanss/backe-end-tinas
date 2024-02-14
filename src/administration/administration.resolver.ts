import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdministrationService } from './administration.service';
import { Administration } from './entities/administration.entity';
import { CreateAdministrationInput } from './dto/create-administration.input';
import { UpdateAdministrationInput } from './dto/update-administration.input';

@Resolver(() => Administration)
export class AdministrationResolver {
  constructor(private readonly administrationService: AdministrationService) {}

  @Mutation(() => Administration)
  createAdministration(
    @Args('createAdministrationInput')
    createAdministrationInput: CreateAdministrationInput,
  ) {
    return this.administrationService.create(createAdministrationInput);
  }

  @Query(() => [Administration], { name: 'administration' })
  findAll() {
    return this.administrationService.findAll();
  }

  @Query(() => Administration, { name: 'administration' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.administrationService.findOne(id);
  }

  @Mutation(() => Administration)
  updateAdministration(
    @Args('updateAdministrationInput')
    updateAdministrationInput: UpdateAdministrationInput,
  ) {
    return this.administrationService.update(
      updateAdministrationInput.id,
      updateAdministrationInput,
    );
  }

  @Mutation(() => Administration)
  removeAdministration(@Args('id', { type: () => Int }) id: number) {
    return this.administrationService.remove(id);
  }
}
