import { Controller, Get, Param, Res } from '@nestjs/common';
import { VideoplaybackService } from './videoplayback.service';
import { Response } from 'express';

@Controller('videoplayback')
export class VideoplaybackController {
  constructor(private videoplaybackService: VideoplaybackService) {}

  @Get(':id.mp4')
  getVideoplayback(@Res() response: Response, @Param('id') id: string) {
    this.videoplaybackService.getVideoStream(id, response);
  }
}
