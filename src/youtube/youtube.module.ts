import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';

@Module({
  imports: [],
  controllers: [VideosController],
  providers: [VideosService],
})
export class YoutubeModule {}
