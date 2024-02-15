import { UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphqlFiles } from 'src/utils/file.interceptor';
import { CreateAdditionInput } from '../dto/add-include.input';
import { RoomInput } from '../dto/create-room.input';
import { Room } from '../entities/items/room.entity';
import { GuestHouse } from '../entities/profiles/guesthouse.entity';
import { GuesthouseService } from '../services/guesthouse.service';

@Resolver()
export class GuesthouseResolver {
  constructor(private guesthouseService: GuesthouseService) {}

  @UseInterceptors(GraphqlFiles(['addRoom.images']))
  @Mutation(() => Room)
  async addRoomToGuestHouse(@Args('addRoom') info: RoomInput) {
    return this.guesthouseService.addRoom(info);
  }

  /*
    @UseInterceptors(GraphqlFiles(['additionInput.addition.icon']))
    @Mutation(() => GuestHouse)
    async addIncludesToGuestHouse(@Args('additionInput') addition: CreateAdditionInput) {
        return this.guesthouseService.addIncludes(addition)
    }

    @UseInterceptors(GraphqlFiles(['paymentInput.addition.icon']))
    @Mutation(() => GuestHouse)
    async addPaymentsToGuestHouse(@Args('paymentInput') addition: CreateAdditionInput) {
        return this.guesthouseService.addPayments(addition)
    }
    */
}
