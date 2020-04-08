import { Controller, Get, Param } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get(':id')
  getVideos(@Param('id') id: string): object {
    return this.videosService.getById(id);
  }
}
