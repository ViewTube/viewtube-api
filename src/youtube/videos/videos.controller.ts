import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
  CacheInterceptor,
} from '@nestjs/common';
import { VideosService } from './videos.service';

@UseInterceptors(CacheInterceptor)
@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  @Get(':id')
  getVideos(@Param('id') id: string): object {
    return this.videosService.getById(id);
  }
}
