import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { Video, VideoSchema } from 'src/core/videos/schemas/video.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Video.name, schema: VideoSchema, collection: 'videos' },
    ])
  ],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService]
})
export class SubscriptionsModule {}
