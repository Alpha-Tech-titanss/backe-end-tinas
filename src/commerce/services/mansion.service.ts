import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Mansion } from '../entities/profiles/mansion.entity';

@Injectable()
export class MansionService {
  constructor(
    @InjectModel(Mansion.name) private MansionModel: Model<Mansion>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
  ) {}

  create() {
    return new this.MansionModel().save();
  }

  findAll() {
    return this.MansionModel.find().populate({ path: 'rooms' });
  }

  /*
    async addIncludes(include) {
        const hotel = await this.HotelModel.findById(include.profileId)
        hotel.includes.push(include.addition)
        return await this.HotelModel.findByIdAndUpdate(hotel._id, hotel).populate({ path: "rooms" })
    }

    async addPayments(include) {
        const hotel = await this.HotelModel.findById(include.profileId)
        hotel.payments.push(include.addition)
        return await this.HotelModel.findByIdAndUpdate(hotel._id, hotel).populate({ path: "rooms" })
    }
    */

  findById(id) {
    return this.MansionModel.findById(id);
  }

  update(info) {
    return this.MansionModel.findByIdAndUpdate(info._id, info);
  }
}
