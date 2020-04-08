import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IVideo } from './interfaces/video.interface';
import { VideoEntity } from './video.entity';
import { Common } from '../common';
import { getBasicInfo, videoInfo } from 'ytdl-core';

@Injectable()
export class VideosService {
  async getById(id: string): Promise<IVideo> {
    const url: string = Common.youtubeVideoUrl + id;
    try {
      const result: videoInfo = await getBasicInfo(url);
      const video: IVideo = new VideoEntity(result);
    } catch (err) {
      console.error(err);
      throw new HttpException(
        'Error loading video',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
