import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateAdditionInput } from '../dto/add-include.input';
import { RoomInput } from '../dto/create-room.input';
import { Room } from '../entities/items/room.entity';
import { Hotel } from '../entities/profiles/hotel.entity';
import { HotelService } from '../services/hotel.service';

@Resolver()
export class HotelResolver {
  constructor(private hotelService: HotelService) {}

  @UseInterceptors(GraphqlFiles(['addRoom.images']))
  @Mutation(() => Room)
  async addRoomToHotel(@Args('addRoom') info: RoomInput) {
    return this.hotelService.addRoom(info);
  }

  /*
    @UseInterceptors(GraphqlFiles(['additionInput.addition.icon']))
    @Mutation(() => Hotel)
    async addIncludesToHotel(@Args('additionInput') addition: CreateAdditionInput) {
        return this.hotelService.addIncludes(addition)
    }

    @UseInterceptors(GraphqlFiles(['paymentInput.addition.icon']))
    @Mutation(() => Hotel)
    async addPaymentsToHotel(@Args('paymentInput') addition: CreateAdditionInput) {
        return this.hotelService.addPayments(addition)
    }
    */
}
