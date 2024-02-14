import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Activity } from '../entities/profiles/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name) private ActivityModel: Model<Activity>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
  ) {}

  create() {
    return new this.ActivityModel().save();
  }

  findAll() {
    return this.ActivityModel.find().populate({ path: 'rooms' });
  }


  async addIncludes(include) {
    const activity = await this.ActivityModel.findById(include.profileId);
    activity.includes.push(include.addition);
    return await this.ActivityModel.findByIdAndUpdate(
      activity._id,
      activity,
    ).populate({ path: 'rooms' });
  }

  async addPayments(include) {
    const activity = await this.ActivityModel.findById(include.profileId);
    activity.payments.push(include.addition);
    return await this.ActivityModel.findByIdAndUpdate(
      activity._id,
      activity,
    ).populate({ path: 'rooms' });
  }

  findById(id) {
    return this.ActivityModel.findById(id);
  }

  update(info) {
    return this.ActivityModel.findByIdAndUpdate(info._id, info);
  }
}
