import { Injectable, HttpException } from '@nestjs/common';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';
import { VideoDto } from 'src/core/videos/dto/video.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Video } from 'src/core/videos/schemas/video.schema';
import { Model } from 'mongoose';
import { Subscription } from './schemas/subscription.schema';

@Injectable()
export class SubscriptionsService {
  constructor(@InjectModel(Video.name) private readonly videoModel: Model<Video>, @InjectModel(Subscription.name) private readonly subscriptionModel: Model<Subscription>) { }

  async getSubscribedChannels(username: string) {
    return this.subscriptionModel.find({ username }).exec().catch(err => {
      throw new HttpException('No subscriptions', 404);
    })
  }
  async getSubscriptionFeed(username: string): Promise<Array<VideoDto>> { }

  async getSubscription(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    const user = await this.subscriptionModel.findOne({ username }).exec();
    if (user.subscriptions.length > 0) {
      const subscription = user.subscriptions.find(e => e.channelId === channelId);
      if (subscription) {
        return {
          channelId,
          isSubscribed: true
        }
      }
    }
    throw new HttpException('Subscription not found', 404);
  }

  async subscribeToChannel(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    let user = await this.subscriptionModel.findOne({ username }).exec();

    if (!user) {
      user = new this.subscriptionModel({
        username,
        subscriptions: []
      });
    }

    if (!user.subscriptions.find(e => e.channelId === channelId)) {
      user.subscriptions.push({
        channelId
      });
    }

    await user.save();

    return {
      channelId,
      isSubscribed: true
    };
  }

  async unsubscribeFromChannel(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    const user = await this.subscriptionModel.findOne({ username }).exec();
    if (user) {
      user.subscriptions = user.subscriptions.filter(e => e.channelId === channelId);
      await user.save();

      return {
        channelId,
        isSubscribed: false
      }
    }
    throw new HttpException('User or subscription not found', 404);
  }
}
