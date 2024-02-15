import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import {
  Notification,
  NotificationEvent,
} from './entities/notification.entity';
import { Inject, UseGuards } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';
import { GqlAuthGuard } from 'src/utils/guards/jwt-auth.guard';
import { CurrentUser } from 'src/utils/guards/current-user.decorator';
import { NotificationUserInput, NotificationInput, NotificationCronInput } from './dto/notification.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => Notification)
export class NotificationResolver {
  constructor(
    private readonly notificationService: NotificationService,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) { }

  @Subscription(() => NotificationEvent, {
    name: 'notification',
    /*filter: async function (this: NotificationResolver, payload, varaibles, context) {
      return event;
    }*/
  })
  handleNotification() {
    return this.pubSub.asyncIterator('notification');
  }

  @Mutation(() => Int)
  async registerDevice(@Args('id', { type: () => String }) id: string, @CurrentUser() user ) {
    return this.notificationService.register(id, user.id);
  }
  

  @Mutation(() => Int)
  async notify(@Args('notificationUserInput') notificationUser: NotificationUserInput) {
    return this.notificationService.notifyUser(notificationUser.id, notificationUser.notification);
  }

  @Mutation(() => Int)
  async notifyAll(@Args('notificationInput') notification: NotificationInput) {
    return this.notificationService.notifyUsers(notification);
  }

  @Mutation(() => Int)
  async notifyAllOnTime(@Args('notificationCronInput') cronNotification: NotificationCronInput ) {
    return this.notificationService.notifyUsersCron(cronNotification.name , cronNotification.cronTime, cronNotification.notification);
  }

  @Query(() => [String])
  async getNotifications() {
    return this.notificationService.getScheduleNotifications();
  }

  @Mutation(() => Int)
  async removeNotifications(@Args('id', { type: () => String }) id ) {
    return this.notificationService.removeScheduleNotification(id);
  }
  
}
