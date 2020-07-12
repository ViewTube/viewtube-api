import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { VideoDto } from './dto/video.dto';
import { VideoEntity } from './video.entity';
import { Common } from '../common';
import { getBasicInfo, videoInfo } from 'ytdl-core';

@Injectable()
export class VideosService {
  async getById(id: string): Promise<VideoDto> {
    const url: string = Common.youtubeVideoUrl + id;
    try {
      const result: videoInfo = await getBasicInfo(url);
      const video: VideoDto = new VideoEntity(result);
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
