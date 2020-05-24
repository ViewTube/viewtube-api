import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    YoutubeModule,
    MongooseModule.forRoot('mongodb://localhost/viewtube'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
