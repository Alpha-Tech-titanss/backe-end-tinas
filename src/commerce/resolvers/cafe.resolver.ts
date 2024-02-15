import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateDrinkInput } from '../dto/create-drink.input';
import { Drink } from '../entities/items/drink.entity';
import { CafeService } from '../services/cafe.service';

@Resolver()
export class CafeResolver {
  constructor(private cafeService: CafeService) {}

  @UseInterceptors(GraphqlFiles(['addDrink.images']))
  @Mutation(() => Drink)
  async addDrinkToCafe(@Args('addDrink') info: CreateDrinkInput) {
    return this.cafeService.addDrink(info);
  }
}
