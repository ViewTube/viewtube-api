import { Injectable, HttpException } from '@nestjs/common';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VideoBasicInfo } from 'src/core/videos/schemas/video-basic-info.schema';
import { ChannelBasicInfo } from 'src/core/channels/schemas/channel-basic-info.schema';
import { Model } from 'mongoose';
import { Subscription } from './schemas/subscription.schema';
import { Cron, CronExpression } from '@nestjs/schedule';
import xmlParser from "xml2json";
import fetch from 'node-fetch'
import { VideoBasicInfoDto } from 'src/core/videos/dto/video-basic-info.dto';
import { Common } from 'src/core/common';
import humanizeDuration from 'humanize-duration';
import { Sorting } from 'src/common/sorting.type';
import { ChannelBasicInfoDto } from 'src/core/channels/dto/channel-basic-info.dto';
import fs from 'fs';
import path from 'path';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(VideoBasicInfo.name) private readonly videoModel: Model<VideoBasicInfo>,
    @InjectModel(ChannelBasicInfo.name) private readonly channelModel: Model<ChannelBasicInfo>,
    @InjectModel(Subscription.name) private readonly subscriptionModel: Model<Subscription>,
    private notificationsService: NotificationsService
  ) { }

  private feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=';

  @Cron(CronExpression.EVERY_10_SECONDS)
  async collectSubscriptionsJob(): Promise<void> {
    const users = await this.subscriptionModel.find().lean(true).exec();
    const channelIds = users.reduce((val, { subscriptions }) => [...val, ...subscriptions.map(e => e.channelId)], []);
    const uniqueChannelIds = [...new Set(channelIds)];

    const feedRequests = uniqueChannelIds
      .map(id =>
        fetch(this.feedUrl + id).then(response => {
          if (response.ok) {
            return response.text();
          }
          return null;
        })
          .then(data => {
            if (data) {
              const jsonData = xmlParser.toJson(data, { coerce: true, object: true }) as any;
              const videos: Array<VideoBasicInfoDto> = jsonData.feed.entry
                .map((video: any) => this.convertRssVideo(video));

              const authorId = jsonData.feed['yt:channelId']

              const channel: ChannelBasicInfoDto = {
                authorId,
                author: jsonData.feed.author.name,
                authorUrl: jsonData.feed.author.uri
              }

              const cachedChannelThmbPath = path.join(global['__basedir'], `channels/${authorId}.jpg`);
              if (fs.existsSync(cachedChannelThmbPath)) {
                channel.authorThumbnailUrl = `channels/${authorId}/thumbnail/tiny.jpg`;
              } else {
                channel.authorThumbnailUrl = undefined;
              }

              this.channelModel.findOneAndUpdate({ authorId: channel.authorId, }, channel, { upsert: true, omitUndefined: true }).exec().catch(console.log);
              return videos;
            }
          })
          .catch(err => console.log(`Could not find channel, the following error can be safely ignored:\n${err}`))
      );

    const promiseResults = await Promise.allSettled(feedRequests);
    if (promiseResults.find((promiseResult: any) => promiseResult.value)) {
      const videoValues = promiseResults.filter((promiseResult: any) => promiseResult.value)
      const videos: Array<VideoBasicInfoDto> = videoValues
        .reduce((promiseResult: any, { value }: any) => [...promiseResult, ...value], []);

      await Promise.allSettled(videos.map(async element => {
        if (!(await this.videoModel.exists({ videoId: element.videoId }))) {
          this.sendUserNotifications(element);
        }
        try {
          return this.videoModel.findOneAndUpdate({ videoId: element.videoId, }, element, { upsert: true }).exec();
        }
        catch (err) {
          console.log(err);
          console.log(element);
        }
      }));
    }
  }

  async sendUserNotifications(video: VideoBasicInfoDto) {
    const users = await this.subscriptionModel.find().lean().exec();
    const subscribedUsers = users.filter(u => u.subscriptions.find(sub => sub.channelId === video.authorId));
    if (subscribedUsers) {
      subscribedUsers.forEach((user: Subscription) => {
        const channelSubscription = user.subscriptions.find(e => e.channelId === video.authorId)
        if (channelSubscription.createdAt && channelSubscription.createdAt.valueOf() < video.published) {
          console.log('notification for ' + user.username);
          this.notificationsService.sendVideoNotification(user.username, video);
        }
      })
    }
  }

  convertRssVideo(video: any): VideoBasicInfoDto {
    const rating = video['media:group']['media:community']['media:starRating'];
    const { likes, dislikes } = this.convertStarsToLikesDislikes(
      { totalRatings: rating.count, avgStarRatings: rating.average }
    );

    const durationString = humanizeDuration(
      new Date().valueOf() - Date.parse(video.published).valueOf(),
      { largest: 1 },
    );

    const description = video['media:group']['media:description'];
    const descriptionText = typeof description === 'string' ? description : '';

    return {
      videoId: video['yt:videoId'],
      title: video.title,
      author: video.author.name,
      authorId: video['yt:channelId'],
      description: descriptionText,
      published: Date.parse(video.published),
      publishedText: durationString,
      videoThumbnails: Common.getVideoThumbnails(video['yt:videoId']),
      viewCount: video['media:group']['media:community']['media:statistics'].views,
      likeCount: likes,
      dislikeCount: dislikes
    }
  }

  convertStarsToLikesDislikes({ totalRatings, avgStarRatings }): { likes: number, dislikes: number } {
    const likeRatio = (avgStarRatings - 1) / 4;
    const likes = Math.round(totalRatings * likeRatio);
    const dislikes = Math.round(totalRatings * (1 - likeRatio));
    return { likes, dislikes };
  }

  async getSubscribedChannels(username: string, limit: number, start: number, sort: Sorting<ChannelBasicInfoDto>) {
    const user = await this.subscriptionModel.findOne({ username }).exec().catch(err => {
      throw new HttpException('No subscriptions', 404);
    });
    if (user) {
      const userChannelIds = user.subscriptions.map(e => e.channelId);
      console.log(sort);
      if (userChannelIds) {
        return this.channelModel
          .find({ authorId: { $in: userChannelIds } })
          .sort(sort)
          .limit(parseInt(limit as any))
          .skip(parseInt(start as any))
          .catch(err => {
            console.log(err);
          })
      }
    }
    throw new HttpException('No subscriptions', 404);
  }

  async getSubscriptionFeed(username: string, limit: number, start: number): Promise<Array<VideoBasicInfoDto>> {
    const userSubscriptions = await this.subscriptionModel.findOne({ username }).lean().exec();
    if (userSubscriptions) {
      const userSubscriptionIds = userSubscriptions.subscriptions.map(e => e.channelId);
      return this.videoModel
        .find({ authorId: { $in: userSubscriptionIds } })
        .sort({ published: -1 })
        .limit(limit)
        .skip(start)
        .map((el: any) => {
          delete el._id;
          delete el.__v;
          return el;
        }).catch(err => {
          throw new HttpException(`Error fetching subscription feed: ${err}`, 500);
        });
    }
    throw new HttpException(`Error fetching subscription feed, found no subscriptions`, 404);
  }

  async getSubscription(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    const user = await this.subscriptionModel.findOne({ username }).exec();
    if (user && user.subscriptions.length > 0) {
      const subscription = user.subscriptions.find(e => e.channelId === channelId);
      if (subscription) {
        return {
          channelId,
          isSubscribed: true
        }
      }
    }
    return {
      channelId,
      isSubscribed: false
    }
  }

  async subscribeToChannel(username: string, channelId: string): Promise<SubscriptionStatusDto> {
    const user = await this.subscriptionModel.findOne({ username }).exec();

    const subscriptions = user ? user.subscriptions : [];
    subscriptions.push({ channelId, createdAt: new Date() });

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
