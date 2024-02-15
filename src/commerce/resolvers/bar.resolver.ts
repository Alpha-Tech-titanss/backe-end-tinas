import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateDrinkInput } from '../dto/create-drink.input';
import { RoomInput } from '../dto/create-room.input';
import { Drink } from '../entities/items/drink.entity';
import { BarService } from '../services/bar.service';

@Resolver()
export class BarResolver {
  constructor(private barService: BarService) {}

  @UseInterceptors(GraphqlFiles(['addDrink.images']))
  @Mutation(() => Drink)
  async addDrinkToBar(@Args('addDrink') info: CreateDrinkInput) {
    return this.barService.addDrink(info);
  }
}
