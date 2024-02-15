import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommerceService } from '../commerce.service';
import { Room } from '../entities/items/room.entity';
import { GuestHouse } from '../entities/profiles/guesthouse.entity';

@Injectable()
export class GuesthouseService {
  constructor(
    @InjectModel(GuestHouse.name) private GuesthouseModel: Model<GuestHouse>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Room.name) private RoomModel: Model<Room>,
  ) {}

  create() {
    return new this.GuesthouseModel().save();
  }

  findAll() {
    return this.GuesthouseModel.find().populate({ path: 'rooms' });
  }

  async addRoom(roomInfo) {
    const guesthouse = await this.GuesthouseModel.findById(roomInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      roomInfo.commerce,
    );
    if (guesthouse) {
      roomInfo.commerce = commerce._id;
      const room = await new this.RoomModel(roomInfo).save();
      guesthouse.rooms.push(room._id);
      return await this.GuesthouseModel.findByIdAndUpdate(
        guesthouse._id,
        guesthouse,
      ).populate({ path: 'rooms' });
    }
  }

  async addIncludes(include) {
    const guesthouse = await this.GuesthouseModel.findById(include.profileId);
    guesthouse.includes.push(include.addition);
    return await this.GuesthouseModel.findByIdAndUpdate(
      guesthouse._id,
      guesthouse,
    ).populate({ path: 'rooms' });
  }

  async addPayments(include) {
    const guesthouse = await this.GuesthouseModel.findById(include.profileId);
    guesthouse.payments.push(include.addition);
    return await this.GuesthouseModel.findByIdAndUpdate(
      guesthouse._id,
      guesthouse,
    ).populate({ path: 'rooms' });
  }

  findById(id) {
    return this.GuesthouseModel.findById(id);
  }

  update(info) {
    return this.GuesthouseModel.findByIdAndUpdate(info._id, info);
  }
}
