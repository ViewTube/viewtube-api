import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import webPush, { PushSubscription } from "web-push";
import { ConfigService } from '@nestjs/config';

@ApiTags('User')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('user/notifications')
export class NotificationsController {

  constructor(private configService: ConfigService) { }

  @Post('subscribe')
  async subscribeToNotifications(@Body() body): Promise<void> {
    const payload = JSON.stringify({
      title: 'Notifications enabled',
      body: 'ViewTube subscription notifications enabled'
    });

    console.log(body);
    webPush.sendNotification(body, payload)
      .catch(console.log)
      .then(result => {
        console.log(result);
      }, reason => {
        console.log(reason);
      })
  }
}
