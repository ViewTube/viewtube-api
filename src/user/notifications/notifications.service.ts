import { Injectable } from '@nestjs/common';
import webPush from 'web-push';
import { NotificationsSubscription } from './schemas/notifications-subscription.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationsService {
  constructor(@InjectModel(NotificationsSubscription.name) private readonly notificationsSubscriptionModel: Model<NotificationsSubscription>) { }

  async createNotificationsSubscription(subscription: webPush.PushSubscription, username: string): Promise<NotificationsSubscription> {
    const notificationsSubscription = new this.notificationsSubscriptionModel({
      endpoint: subscription.endpoint,
      keys: subscription.keys,
      username
    });

    return notificationsSubscription.save();
  }

  @Cron(CronExpression.EVERY_DAY_AT_10PM)
  async sendNotification() {
    const users = await this.notificationsSubscriptionModel.find().lean();
    users.forEach(userSubscription => {
      const payload = JSON.stringify({
        title: 'Random Test Notification',
        body: 'LOL HAHA'
      });

      webPush.sendNotification(userSubscription, payload)
        .then(result => {
        }, reason => {
          console.log('rejected', reason);
        })
        .catch(err => console.log('error', err));
    })
  }
}
