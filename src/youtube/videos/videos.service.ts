import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Video } from './dto/video.dto';
import { Common } from '../common';
import { getBasicInfo, videoInfo } from 'ytdl-core';

@Injectable()
export class VideosService {
  async getById(id: string): Promise<Video> {
    const url: string = Common.youtubeVideoUrl + id;
    try {
      const result: videoInfo = await getBasicInfo(url);
    } catch (err) {
      console.error(err);
      throw new HttpException(
        'Error loading video',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
