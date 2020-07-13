import { Injectable, HttpException } from '@nestjs/common';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';
import { VideoDto } from 'src/core/videos/dto/video.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Video } from 'src/core/videos/schemas/video.schema';
import { Model } from 'mongoose';
import { Subscription } from './schemas/subscription.schema';
import { Cron, CronExpression } from '@nestjs/schedule';
import xmlParser from "xml2json";
import fetch from 'node-fetch'
import fs from 'fs'
import { VideoBasicInfoDto } from 'src/core/videos/dto/video-basic-info.dto';
import { Common } from 'src/core/common';

@Injectable()
export class SubscriptionsService {
  constructor(@InjectModel(Video.name) private readonly videoModel: Model<Video>, @InjectModel(Subscription.name) private readonly subscriptionModel: Model<Subscription>) { }

  private feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=';

  // @Cron('0 * * * * *')
  async collectSubscriptionsJob(): Promise<void> {
    const users = await this.subscriptionModel.find().lean(true).exec();
    const channelIds = users.reduce((val, { subscriptions }) => [...val, ...subscriptions.map(e => e.channelId)], []);
    const uniqueChannelIds = [...new Set(channelIds)];

    const feedRequests = uniqueChannelIds.map(id => fetch(this.feedUrl + id).then(response => {
      if (response.ok) {
        return response.text();
      }
    }).then(data => {
      const jsonData = xmlParser.toJson(data, { coerce: true, object: true }) as any;
      const videos: Array<VideoBasicInfoDto> = jsonData.feed.entry
        .map((video: any) => this.convertRssVideo(video))
      return videos;
    }).catch(err => console.log('error')))

    Promise.allSettled(feedRequests)
      .then(results => {
        console.log('done');
        fs.writeFileSync('pussy.json', results);
      })
  }

  convertRssVideo(video: any): VideoBasicInfoDto {
    const rating = video['media:group']['media:community']['media:starRating'];
    const { likes, dislikes } = this.convertStarsToLikesDislikes(
      { totalRatings: rating.count, avgStarRatings: rating.average }
    );

    return {
      videoId: video['yt:videoId'],
      title: video.title,
      author: video.author.name,
      authorId: video['yt:channelId'],
      description: video['media:group']['media:description'],
      published: Date.parse(video.published),
      videoThumbnails: Common.getVideoThumbnails(video['yt:videoId']),
      viewCount: video['media:group']['media:community']['media:statistics'].views,
      likeCount: likes,
      dislikeCount: dislikes
    }
  }

  convertStarsToLikesDislikes({ totalRatings, avgStarRatings }): { likes: number, dislikes: number } {
    const likeRatio = (avgStarRatings - 1) / 4;
    const likes = totalRatings * likeRatio;
    const dislikes = totalRatings * (1 - likeRatio);
    return { likes, dislikes };
  }

  async getSubscribedChannels(username: string) {
    return this.subscriptionModel.find({ username }).exec().catch(err => {
      throw new HttpException('No subscriptions', 404);
    })
  }

  async getSubscriptionFeed(username: string): Promise<Array<VideoDto>> { return null; }

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
    const user = await this.subscriptionModel.findOne({ username }).exec();

    const subscriptions = user ? user.subscriptions : [];
    subscriptions.push({ channelId });

    await this.subscriptionModel
      .findOneAndUpdate({ username }, { username, subscriptions }, { upsert: true }).exec();

    return {
      channelId,
      isSubscribed: true
    };
  }

  async unsubscribeFromChannel(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    const user = await this.subscriptionModel.findOne({ username }).exec();
    if (
      user &&
      user.subscriptions &&
      user.subscriptions.length > 0 &&
      user.subscriptions.find(e => e.channelId === channelId)
    ) {
      user.subscriptions = user.subscriptions.filter(e => e.channelId !== channelId);
      await user.save();

      return {
        channelId,
        isSubscribed: false
      }
    }
    throw new HttpException('User or subscription not found', 404);
  }
}
