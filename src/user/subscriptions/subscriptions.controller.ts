import { Controller, Get, Put, Param, Post, Delete, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';
import { VideoDto } from 'src/core/videos/dto/video.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Request } from 'express';

@ApiTags('User')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('user/subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) { }

  @Get('channels')
  async getSubscribedChannels(@Req() req: any) {
    return this.subscriptionsService.getSubscribedChannels(req.user.username);
  }

  @Get('videos')
  async getSubscriptionVideos(@Req() req: any): Promise<Array<VideoDto>> {
    return this.subscriptionsService.getSubscriptionFeed(req.user.username);
  }

  @Get(':channelId')
  async getSubscription(@Req() req: any, @Param('channelId') channelId: string): Promise<SubscriptionStatusDto> {
    return this.subscriptionsService.getSubscription(req.user.username, channelId);
  }

  @Put(':channelId')
  async createSubscription(@Req() req: any, @Param('channelId') channelId: string): Promise<SubscriptionStatusDto> {
    return this.subscriptionsService.subscribeToChannel(req.user.username, channelId);
  }

  @Delete(':channelId')
  async deleteSubscription(@Req() req: any, @Param('channelId') channelId: string): Promise<SubscriptionStatusDto> {
    return this.subscriptionsService.unsubscribeFromChannel(req.user.username, channelId);
  }
}
