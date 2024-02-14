import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { Public } from 'src/utils/guards/public.decorator';
import { CreateAdditionInput } from '../dto/add-include.input';
import { AddDishToResturant, DishSearchParamsInput } from '../dto/create-base-commerce.input';
import { DishCategoryInput } from '../dto/create-dishcat.input';
import { DishCategory } from '../entities/items/category.entity';
import { Dish } from '../entities/items/dish.entity';
import { Restaurant } from '../entities/profiles/restaurant.entity';
import { DishCategoryService } from '../services/dish-category.service';
import { RestaurantService } from '../services/restaurant.service';

@UseGuards(GqlAuthGuard)
@Resolver()
export class RestaurantResolver {
  constructor(
    private readonly resturantService: RestaurantService,
    private readonly dishCategoryService: DishCategoryService,
  ) {}

  @UseInterceptors(GraphqlFiles(['addDish.images']))
  @Mutation(() => Dish)
  async addDishToRestaurant(@Args('addDish') info: AddDishToResturant) {
    return this.resturantService.createDish(info);
  }

  @Mutation(() => Dish)
  async removeDish(@Args('id', { type: () => String }) id: string) {
    return this.resturantService.removeDish(id);
  }

  /*
    @UseInterceptors(GraphqlFiles(['additionInput.addition.icon']))
    @Mutation(() => Restaurant)
    async addIncludesToRestaurant(@Args('additionInput') addition: CreateAdditionInput) {
        return this.resturantService.addIncludes(addition)
    }

    @UseInterceptors(GraphqlFiles(['paymentInput.addition.icon']))
    @Mutation(() => Restaurant)
    async addPaymentsToRestaurant(@Args('paymentInput') addition: CreateAdditionInput) {
        return this.resturantService.addPayments(addition)
    }
  */

  @UseInterceptors(GraphqlFiles(['dishCategoryInput.icon']))
  @Mutation(() => Restaurant)
  async createDishCategory(
    @Args('dishCategoryInput') dishCategory: DishCategoryInput,
  ) {
    return this.dishCategoryService.create(dishCategory);
  }

  @Mutation(() => Restaurant)
  async removeDishCategory(@Args('id', { type: () => String }) id: string) {
    return this.dishCategoryService.remove(id);
  }

  @Public()
  @Query(() => [DishCategory])
  allDishCategory() {
    return this.dishCategoryService.findAll();
  }

  @Public()
  @Query(() => DishCategory)
  getDishCategory(@Args('id', { type: () => String }) id: string) {
    return this.dishCategoryService.find(id);
  }

  @Public()
  @Query(() => [Dish])
  dishSearch( @Args('searchParams') searchParams: DishSearchParamsInput) {
    return this.resturantService.serach(searchParams);
  }
}
