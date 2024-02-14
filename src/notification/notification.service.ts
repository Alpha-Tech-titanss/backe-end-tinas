import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SchedulerRegistry } from '@nestjs/schedule';
import { PubSub } from 'apollo-server-express';
import { CronJob } from 'cron';
import { Model } from 'mongoose';
import { Notification } from './entities/notification.entity';
const FCM = require('fcm-node');
const serverKey = require('../../tynass-demo-app-4005e90495b2.json')

@Injectable()
export class NotificationService {

  ids = []
  fcm = new FCM(serverKey);

  constructor(
    @InjectModel(Notification.name)
    private NotificationModel: Model<Notification>,
    private schedulerRegistry: SchedulerRegistry,
    @Inject('PUB_SUB') private pubSub: PubSub,
  ) { }

  async create() {
    return await new this.NotificationModel().save();
  }

  async notifyUser(id, notification) {
    notification.to = this.ids[id]
    return this.sendNotification(notification).then( () => 200 ).catch( e => 400 )
  }

  async notifyUsers(notification) {
    notification.to = '/topics/notificationAll'
    return this.sendNotification(notification).then( () => 200 ).catch( e => 400 )
  }

  async notifyUsersCron(name , time , notification) {
    notification.to = '/topics/notificationAll'
    const job =  new CronJob(time, () => this.sendNotification(notification).then( () => 200 ).catch( e => 400 ) )
    this.schedulerRegistry.addCronJob( `${name}-${Date.now()}`,job)
    return 200
  }

  removeScheduleNotification( id ) {
    this.schedulerRegistry.deleteCronJob(id)
    return 200
  }

  getScheduleNotifications() {
    return this.schedulerRegistry.getCronJobs().keys()
  }

  register(device_id, user_id) {
    this.ids[user_id] = device_id
    return 200
  }

  sendNotification(notification) {
    return new Promise((resolve, reject) => {
      this.fcm.send(notification, function (err, response) {
        if (err)
          return reject(err)
        resolve(response)
      })
    })
  }
}
