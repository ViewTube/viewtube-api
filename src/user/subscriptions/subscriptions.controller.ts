import { Controller, Get, Put, Param, Post, Delete, Req, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { VideoBasicInfoDto } from 'src/core/videos/dto/video-basic-info.dto';
import { ChannelBasicInfoDto } from 'src/core/channels/dto/channel-basic-info.dto';
import { Sorting } from 'src/common/sorting.type';

@ApiTags('User')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('user/subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) { }

  @Get('channels')
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'start', required: false })
  @ApiQuery({ name: 'sort', type: Object, example: '{ "sort": { "author": "ASC", "authorVerified": "DESC" } }', required: false })
  async getSubscribedChannels(
    @Req() req: any,
    @Query('limit') limit: number = 30,
    @Query('start') start: number = 0,
    @Query('sort') sort: Sorting<ChannelBasicInfoDto> = {}
  ) {
    return this.subscriptionsService.getSubscribedChannels(req.user.username, limit, start, sort);
  }

  @Get('videos')
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'start', required: false })
  async getSubscriptionVideos(
    @Req() req: any,
    @Query('limit') limit: number = 30,
    @Query('start') start: number = 0
  ): Promise<Array<VideoBasicInfoDto>> {
    return this.subscriptionsService.getSubscriptionFeed(req.user.username, limit, start);
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
