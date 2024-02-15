import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateDrinkInput } from '../dto/create-drink.input';
import { Drink } from '../entities/items/drink.entity';
import { JwajemshopService } from '../services/jwajemshop.service';

@Resolver()
export class JawjemshopResolver {
  constructor(private jwajemshopService: JwajemshopService) {}

  @UseInterceptors(GraphqlFiles(['addDrink.images']))
  @Mutation(() => Drink)
  async addDrinkToJuiceshop(@Args('addDrink') info: CreateDrinkInput) {
    return this.jwajemshopService.addDrink(info);
  }
}
