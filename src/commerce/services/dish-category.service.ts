import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DishCategory } from '../entities/items/category.entity';

@Injectable()
export class DishCategoryService {
  constructor(
    @InjectModel(DishCategory.name)
    private DishCategoryModel: Model<DishCategory>,
  ) {}

  async create(category) {
    return await new this.DishCategoryModel(category).save();
  }

  remove(id: string) {
    return this.DishCategoryModel.findByIdAndRemove(id);
  }

  update(category) {
    return this.DishCategoryModel.findByIdAndUpdate(category._id, category);
  }

  find(id: string) {
    return this.DishCategoryModel.findById(id).populate({
      path: 'dishs',
      populate: { path: 'restaurant' },
    });
  }

  findAll() {
    return this.DishCategoryModel.find().populate({
      path: 'dishs',
      populate: { path: 'restaurant' },
    });
  }
}
