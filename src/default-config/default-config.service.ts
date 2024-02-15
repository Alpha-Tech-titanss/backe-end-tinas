import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TripService } from 'src/trip/trip.service';
import { DefaultConfig } from './entities/default-config.entity';

@Injectable()
export class DefaultConfigService {
  constructor(
    @InjectModel(DefaultConfig.name) private DefaultConfigModel: Model<DefaultConfig>,
    private readonly tripService: TripService
  ) { }
  async create(createDefaultConfigInput) {

    const trip = await this.tripService.findOne(createDefaultConfigInput.defaultSelectedTripId);
    if(!trip)
    throw new BadRequestException('Trip not found for provided defaultSelectedTripId', { cause: new Error(), description: 'Some error description' })
    const config = await this.DefaultConfigModel.findOne();
    if (config) {
      await this.DefaultConfigModel.updateOne({ _id: config.id }, { defaultSelectedTripId: createDefaultConfigInput.defaultSelectedTripId }, { upsert: true });
      return config;
    }
    else {
      return (new this.DefaultConfigModel(createDefaultConfigInput)).save()
    }
  }

}
