import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Landmark } from '../entities/profiles/landmark.entity';

@Injectable()
export class LandmarkService {
  constructor(
    @InjectModel(Landmark.name) private LandmarkModel: Model<Landmark>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
  ) {}

  create() {
    return new this.LandmarkModel().save();
  }

  findAll() {
    return this.LandmarkModel.find().populate({ path: 'menu' });
  }

  findById(id) {
    return this.LandmarkModel.findById(id);
  }

  update(info) {
    return this.LandmarkModel.findByIdAndUpdate(info._id, info);
  }

  async addIncludes(include) {
    const landmark = await this.LandmarkModel.findById(include.profileId);
    landmark.includes.push(include.addition);
    return await this.LandmarkModel.findByIdAndUpdate(landmark._id, landmark).populate({
      path: 'rooms',
    });
  }

  async addPayments(include) {
    const landmark = await this.LandmarkModel.findById(include.profileId);
    landmark.payments.push(include.addition);
    return await this.LandmarkModel.findByIdAndUpdate(landmark._id, landmark).populate({
      path: 'rooms',
    });
  }
}
