import { Module, CacheModule } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { VideoplaybackController } from './videoplayback/videoplayback.controller';
import { VideoplaybackService } from './videoplayback/videoplayback.service';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 300,
      max: 200,
    }),
    AutocompleteModule
  ],
  controllers: [VideosController, VideoplaybackController],
  providers: [VideosService, VideoplaybackService],
})
export class CoreModule {}
