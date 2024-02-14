import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from '../entities/items/room.entity';
import { Hotel } from '../entities/profiles/hotel.entity';
import { CommerceService } from '../commerce.service';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name) private HotelModel: Model<Hotel>,
    @Inject(forwardRef(() => CommerceService))
    private readonly commerceService: CommerceService,
    @InjectModel(Room.name) private RoomModel: Model<Room>,
  ) {}

  create() {
    return new this.HotelModel().save();
  }

  findAll() {
    return this.HotelModel.find().populate({ path: 'rooms' });
  }

  async addRoom(roomInfo) {
    const hotel = await this.HotelModel.findById(roomInfo.commerce);
    const commerce = await this.commerceService.findByProfileId(
      roomInfo.commerce,
    );
    if (hotel) {
      roomInfo.commerce = commerce._id;
      const room = await new this.RoomModel(roomInfo).save();
      hotel.rooms.push(room._id);
      return await this.HotelModel.findByIdAndUpdate(
        hotel._id,
        hotel,
      ).populate({ path: 'rooms' });
    }
  }

  findRoomById ( id ) {
    return this.RoomModel.findById(id).populate(['commerce']).populate({ path: 'reviews', populate: { path: 'user' } })
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
    return this.HotelModel.findById(id);
  }

  update(info) {
    return this.HotelModel.findByIdAndUpdate(info._id, info);
  }
}
