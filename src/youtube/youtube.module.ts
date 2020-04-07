import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';

@Module({
  imports: [],
  controllers: [VideosController],
  providers: [],
})
export class YoutubeModule {}
