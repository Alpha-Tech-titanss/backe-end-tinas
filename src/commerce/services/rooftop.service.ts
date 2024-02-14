import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { RoofTop } from '../entities/profiles/rooftop.entity';

@Injectable()
export class RooftopService {
  constructor(
    @InjectModel(RoofTop.name) private RoofTopModel: Model<RoofTop>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
  ) {}

  create() {
    return new this.RoofTopModel().save();
  }

  findAll() {
    return this.RoofTopModel.find().populate({ path: 'menu' });
  }

  findById(id) {
    return this.RoofTopModel.findById(id);
  }

  update(info) {
    return this.RoofTopModel.findByIdAndUpdate(info._id, info);
  }

  async addIncludes(include) {
    const roofTop = await this.RoofTopModel.findById(include.profileId);
    roofTop.includes.push(include.addition);
    return await this.RoofTopModel.findByIdAndUpdate(roofTop._id, roofTop).populate({
      path: 'rooms',
    });
  }

  async addPayments(include) {
    const roofTop = await this.RoofTopModel.findById(include.profileId);
    roofTop.payments.push(include.addition);
    return await this.RoofTopModel.findByIdAndUpdate(roofTop._id, roofTop).populate({
      path: 'rooms',
    });
  }
}
