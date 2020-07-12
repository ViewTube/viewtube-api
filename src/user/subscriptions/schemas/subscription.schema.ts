import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Subscription extends Document {
  @Prop({ index: { unique: true } })
  username: string;

  subscriptions: Array<{ channelId: string }>
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);