import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { VideoDto } from './dto/video.dto';
import { VideoEntity } from './video.entity';
import { Common } from '../common';
import { getBasicInfo, videoInfo } from 'ytdl-core';
import { InjectModel } from '@nestjs/mongoose';
import { VideoBasicInfo } from './schemas/video-basic-info.schema';
import { Model } from 'mongoose';
import { ChannelBasicInfo } from '../channels/schemas/channel-basic-info.schema';
import { VideoBasicInfoDto } from './dto/video-basic-info.dto';

@Injectable()
export class VideosService {
  constructor(
    @InjectModel(VideoBasicInfo.name) private readonly videoModel: Model<VideoBasicInfo>,
    @InjectModel(ChannelBasicInfo.name) private readonly channelModel: Model<ChannelBasicInfo>,
  ) { }

  async getById(id: string): Promise<VideoDto> {
    const url: string = Common.youtubeVideoUrl + id;
    try {
      const result: videoInfo = await getBasicInfo(url);
      const video: VideoDto = new VideoEntity(result);

      const channelBasicInfo = {
        authorId: video.authorId,
        author: video.author,
        authorThumbnails: video.authorThumbnails,
        authorVerified: video.authorVerified
      }

      const videoBasicInfo: VideoBasicInfoDto = {
        author: video.author,
        authorId: video.authorId,
        description: video.description,
        dislikeCount: video.dislikeCount,
        likeCount: video.likeCount,
        published: video.published,
        publishedText: video.publishedText,
        title: video.title,
        videoId: video.videoId,
        videoThumbnails: video.videoThumbnails,
        viewCount: video.viewCount,
        lengthSeconds: video.lengthSeconds
      }

      this.channelModel.findOneAndUpdate({ authorId: video.authorId, }, channelBasicInfo, { upsert: true }).exec().catch(console.log);
      this.videoModel.findOneAndUpdate({ videoId: video.videoId, }, videoBasicInfo, { upsert: true }).exec().catch(console.log);

      return video;
    } catch (err) {
      console.error(err);
      throw new HttpException(
        err.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
