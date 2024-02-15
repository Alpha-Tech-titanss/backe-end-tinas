import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateDrinkInput } from '../dto/create-drink.input';
import { Drink } from '../entities/items/drink.entity';
import { JuiceshopService } from '../services/juiceshop.service';

@Resolver()
export class JuiceshopResolver {
  constructor(private juiceshopService: JuiceshopService) {}

  @UseInterceptors(GraphqlFiles(['addDrink.images']))
  @Mutation(() => Drink)
  async addDrinkToJuiceshop(@Args('addDrink') info: CreateDrinkInput) {
    return this.juiceshopService.addDrink(info);
  }
}
