import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosController } from './videos/videos.controller';

@Module({
  imports: [],
  controllers: [AppController, VideosController],
  providers: [AppService],
})
export class AppModule {}
