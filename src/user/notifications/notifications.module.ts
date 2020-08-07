import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsSubscription, NotificationsSubscriptionSchema } from "./schemas/notifications-subscription.schema";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: NotificationsSubscription.name, schema: NotificationsSubscriptionSchema, collection: 'notifications-subscriptions' }
    ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule { }
