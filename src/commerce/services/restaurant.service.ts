import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DishCategoryService } from './dish-category.service';
import { AddDishToResturant } from '../dto/create-base-commerce.input';
import { Dish } from '../entities/items/dish.entity';
import { Restaurant } from '../entities/profiles/restaurant.entity';
import { CommerceService } from '../commerce.service';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name) private RestaurantModel: Model<Restaurant>,
    @InjectModel(Dish.name) private DishModel: Model<Dish>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @Inject(forwardRef(() => DishCategoryService))
    private dishCategoryService: DishCategoryService,
  ) { }

  create() {
    return new this.RestaurantModel().save();
  }

  findAll() {
    return this.RestaurantModel.find();
  }

  async createDish(dishInfo: AddDishToResturant) {
    const category = await this.dishCategoryService.find(dishInfo.category);
    const restaurant = await this.RestaurantModel.findById(dishInfo.restaurant);
    const commerce = await this.commerceService.findByProfileId(
      dishInfo.restaurant,
    );
    if (category && restaurant) {
      dishInfo.restaurant = commerce._id;
      const dish = await new this.DishModel(dishInfo).save();
      restaurant.menu.push(dish._id);
      category.dishs.push(dish._id);
      await this.dishCategoryService.update(category);
      await this.RestaurantModel.findByIdAndUpdate(restaurant._id, restaurant);
      return dish;
    }
    throw new HttpException("category or restaurant doesn't exist", 400);
  }

  /*
  async addIncludes(include) {
    const restaurant = await this.RestaurantModel.findById(include.profileId)
    restaurant.includes.push(include.addition)
    return await this.RestaurantModel.findByIdAndUpdate(restaurant._id, restaurant)
  }

  async addPayments(include) {
    const restaurant = await this.RestaurantModel.findById(include.profileId)
    restaurant.payments.push(include.addition)
    return await this.RestaurantModel.findByIdAndUpdate(restaurant._id, restaurant)
  }
  */

  removeDish(id: string) {
    return this.DishModel.findByIdAndRemove(id);
  }

  findById(id) {
    return this.RestaurantModel.findById(id);
  }

  update(info) {
    return this.RestaurantModel.findByIdAndUpdate(info._id, info);
  }

  async serach(searchParams) {
    return this.DishModel.find({
      name: { $regex: searchParams.name ? new RegExp("^.*" + searchParams.name.toLowerCase() + "*", "i") : /.*/, },
      category: searchParams.category || /.*/,
      price: { $gte: searchParams.min, $lte: searchParams.max }
    })
      .sort({ updatedAt: -1 })
      .skip(searchParams.start)
      .limit(searchParams.limit)
  }
}
