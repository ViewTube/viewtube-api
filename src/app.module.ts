import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaptchaModule } from './captcha/captcha.module';
import { AutocompleteController } from './autocomplete/autocomplete.controller';
import { AutocompleteService } from './autocomplete/autocomplete.service';

@Module({
  imports: [
    YoutubeModule,
    MongooseModule.forRoot(`mongodb://${process.env.VIEWTUBE_DATABASE_HOST}/viewtube`, {
      user: process.env.VIEWTUBE_DATABASE_USER,
      pass: process.env.VIEWTUBE_DATABASE_PASSWORD
    }),
    CacheModule.register({
      ttl: 100,
      max: 500,
    }),
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    CaptchaModule,
  ],
  controllers: [AppController, AutocompleteController],
  providers: [AppService, AutocompleteService],
})
export class AppModule {}
