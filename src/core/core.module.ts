import { Module, CacheModule } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { VideoplaybackController } from './videoplayback/videoplayback.controller';
import { VideoplaybackService } from './videoplayback/videoplayback.service';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from './videos/schemas/video.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.register({
      ttl: 300,
      max: 200,
    }),
    MongooseModule.forFeature([
      { name: Video.name, schema: VideoSchema, collection: 'videos' },
    ]),
    AutocompleteModule,
    ConfigModule.forRoot(),
  ],
  controllers: [VideosController, VideoplaybackController],
  providers: [VideosService, VideoplaybackService],
  exports: [VideosService, VideoplaybackService]
})
export class CoreModule { }
