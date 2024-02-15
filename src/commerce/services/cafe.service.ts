import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Drink } from '../entities/items/drink.entity';
import { Cafe } from '../entities/profiles/cafe.entity';

@Injectable()
export class CafeService {
  constructor(
    @InjectModel(Cafe.name) private CafeModel: Model<Cafe>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Drink.name) private DrinkModel: Model<Drink>,
  ) {}

  create() {
    return new this.CafeModel().save();
  }

  findAll() {
    return this.CafeModel.find().populate({ path: 'menu' });
  }

  findById(id) {
    return this.CafeModel.findById(id);
  }

  update(info) {
    return this.CafeModel.findByIdAndUpdate(info._id, info);
  }

  async addDrink(drinkInfo) {
    const cafe = await this.CafeModel.findById(drinkInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      drinkInfo.commerce,
    );
    if (cafe) {
      drinkInfo.commerce = commerce._id;
      const drink = await new this.DrinkModel(drinkInfo).save();
      cafe.menu.push(drink._id);
      return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
        path: 'menu',
      });
    }
  }

  async addIncludes(include) {
    const cafe = await this.CafeModel.findById(include.profileId);
    cafe.includes.push(include.addition);
    return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
      path: 'rooms',
    });
  }

  async addPayments(include) {
    const cafe = await this.CafeModel.findById(include.profileId);
    cafe.payments.push(include.addition);
    return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
      path: 'rooms',
    });
  }
}
