import { Module, CacheModule } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 100,
      max: 200,
    }),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class YoutubeModule {}
