import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Drink } from '../entities/items/drink.entity';
import { JwajemShop } from '../entities/profiles/jwajemshop.entity';

@Injectable()
export class JwajemshopService {
  constructor(
    @InjectModel(JwajemShop.name) private JwajemshopModel: Model<JwajemShop>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Drink.name) private DrinkModel: Model<Drink>,
  ) {}

  async create() {
    return await new this.JwajemshopModel().save();
  }

  findAll() {
    return this.JwajemshopModel.find().populate({ path: 'menu' });
  }

  async addDrink(drinkInfo) {
    const jwajemshop = await this.JwajemshopModel.findById(drinkInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      drinkInfo.commerce,
    );
    if (jwajemshop) {
      drinkInfo.commerce = commerce._id;
      const drink = await new this.DrinkModel(drinkInfo).save();
      jwajemshop.menu.push(drink._id);
      return await this.JwajemshopModel.findByIdAndUpdate(
        jwajemshop._id,
        jwajemshop,
      ).populate({ path: 'menu' });
    }
  }

  findById(id) {
    return this.JwajemshopModel.findById(id);
  }

  update(info) {
    return this.JwajemshopModel.findByIdAndUpdate(info._id, info);
  }

  async addIncludes(include) {
    const jwajemshop = await this.JwajemshopModel.findById(include.profileId);
    jwajemshop.includes.push(include.addition);
    return await this.JwajemshopModel.findByIdAndUpdate(
      jwajemshop._id,
      jwajemshop,
    ).populate({ path: 'rooms' });
  }

  async addPayments(include) {
    const jwajemshop = await this.JwajemshopModel.findById(include.profileId);
    jwajemshop.payments.push(include.addition);
    return await this.JwajemshopModel.findByIdAndUpdate(
      jwajemshop._id,
      jwajemshop,
    ).populate({ path: 'rooms' });
  }
}
