import { Controller, Get, Param } from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get(':id')
  getVideos(@Param('id') id: string): object {
    return {
      id: id ?? 'not found',
    };
  }
}
