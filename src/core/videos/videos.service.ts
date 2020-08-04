import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { VideoDto } from './dto/video.dto';
import { VideoEntity } from './video.entity';
import { Common } from '../common';
import { getBasicInfo, videoInfo, downloadOptions } from 'ytdl-core';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VideosService {
  constructor(private configService: ConfigService) { }

  async getById(id: string): Promise<VideoDto> {
    const url: string = Common.youtubeVideoUrl + id;
    const ytdlOptions: downloadOptions = {}
    if (this.configService.get('VIEWTUBE_YOUTUBE_COOKIE')) {
      ytdlOptions.requestOptions = {
        cookie: this.configService.get('VIEWTUBE_YOUTUBE_COOKIE')
      }
      if (this.configService.get('VIEWTUBE_YOUTUBE_IDENTIFIER')) {
        ytdlOptions.requestOptions['x-youtube-identity-token'] = this.configService.get('VIEWTUBE_YOUTUBE_IDENTIFIER')
      }
    }
    console.log(ytdlOptions)
    try {
      const result: videoInfo = await getBasicInfo(url,);
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
