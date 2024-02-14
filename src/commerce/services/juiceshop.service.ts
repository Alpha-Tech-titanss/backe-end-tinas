import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Drink } from '../entities/items/drink.entity';
import { JuiceShop } from '../entities/profiles/juiceshop.entity';

@Injectable()
export class JuiceshopService {
  constructor(
    @InjectModel(JuiceShop.name) private JuiceshopModel: Model<JuiceShop>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Drink.name) private DrinkModel: Model<Drink>,
  ) {}

  create() {
    return new this.JuiceshopModel().save();
  }

  findAll() {
    return this.JuiceshopModel.find().populate({ path: 'menu' });
  }

  findById(id) {
    return this.JuiceshopModel.findById(id);
  }

  update(info) {
    return this.JuiceshopModel.findByIdAndUpdate(info._id, info);
  }

  async addDrink(drinkInfo) {
    const juiceshop = await this.JuiceshopModel.findById(drinkInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      drinkInfo.commerce,
    );
    if (juiceshop) {
      drinkInfo.commerce = commerce._id;
      const drink = await new this.DrinkModel(drinkInfo).save();
      juiceshop.menu.push(drink._id);
      return await this.JuiceshopModel.findByIdAndUpdate(
        juiceshop._id,
        juiceshop,
      ).populate({ path: 'menu' });
    }
  }
}
