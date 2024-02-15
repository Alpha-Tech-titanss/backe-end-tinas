import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Drink } from '../entities/items/drink.entity';
import { Bar } from '../entities/profiles/bar.entity';

@Injectable()
export class BarService {
  constructor(
    @InjectModel(Bar.name) private BarModel: Model<Bar>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Drink.name) private DrinkModel: Model<Drink>,
  ) {}

  create() {
    return new this.BarModel().save();
  }

  findAll() {
    return this.BarModel.find().populate({ path: 'menu' });
  }

  findById(id) {
    return this.BarModel.findById(id);
  }

  update(info) {
    return this.BarModel.findByIdAndUpdate(info._id, info);
  }

  async addDrink(drinkInfo) {
    const bar = await this.BarModel.findById(drinkInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      drinkInfo.commerce,
    );
    if (bar) {
      drinkInfo.commerce = commerce._id;
      const drink = await new this.DrinkModel(drinkInfo).save();
      bar.menu.push(drink._id);
      return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
        path: 'menu',
      });
    }
  }

  async addIncludes(include) {
    const bar = await this.BarModel.findById(include.profileId);
    bar.includes.push(include.addition);
    return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
      path: 'rooms',
    });
  }

  async addPayments(include) {
    const bar = await this.BarModel.findById(include.profileId);
    bar.payments.push(include.addition);
    return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
      path: 'rooms',
    });
  }
}
