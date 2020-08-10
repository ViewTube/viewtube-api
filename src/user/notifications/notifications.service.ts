import { Injectable } from '@nestjs/common';
import webPush from 'web-push';
import { NotificationsSubscription } from './schemas/notifications-subscription.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { VideoBasicInfoDto } from 'src/core/videos/dto/video-basic-info.dto';

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

  async sendNotification(username: string, jsonPayload: any): Promise<void> {
    const userSubscriptions = await this.notificationsSubscriptionModel.find({ username }).lean().exec();
    if (userSubscriptions) {
      const payload = JSON.stringify(jsonPayload);

      userSubscriptions.forEach(subscription => {
        webPush.sendNotification(subscription, payload)
          .then(result => {
          }, reason => {
            console.log('notification rejected', reason);
          })
          .catch(err => console.log('error', err));
      });
    }
  }

  async sendVideoNotification(username: string, video: VideoBasicInfoDto): Promise<void> {
    
    await this.sendNotification(username, {
      title: `New video from ${video.author}`,
      body: `${video.title}\n${video.description}`,
      video
    });
  }
}
