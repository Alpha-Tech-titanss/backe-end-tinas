import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shop } from '../entities/profiles/shop.entity';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private ShopModel: Model<Shop>) {}

  create() {
    return new this.ShopModel().save();
  }

  findAll() {
    return this.ShopModel.find();
  }

  findById(id) {
    return this.ShopModel.findById(id);
  }

  update(info) {
    return this.ShopModel.findByIdAndUpdate(info._id, info);
  }
}
