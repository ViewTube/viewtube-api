import { Module, CacheModule } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { VideoplaybackController } from './videoplayback/videoplayback.controller';
import { VideoplaybackService } from './videoplayback/videoplayback.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 100,
      max: 200,
    }),
  ],
  controllers: [VideosController, VideoplaybackController],
  providers: [VideosService, VideoplaybackService],
})
export class YoutubeModule {}
