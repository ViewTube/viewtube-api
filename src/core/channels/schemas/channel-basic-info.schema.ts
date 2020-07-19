import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthorThumbnailDto } from 'src/core/videos/dto/author-thumbnail.dto';

@Schema({ timestamps: true })
export class ChannelBasicInfo extends Document {
  @Prop({ index: { unique: true } })
  authorId: string;

  @Prop()
  author: string;

  @Prop()
  authorUrl?: string;

  @Prop()
  authorThumbnails?: Array<AuthorThumbnailDto>

  @Prop()
  authorVerified?: boolean;
}

export const ChannelBasicInfoSchema = SchemaFactory.createForClass(ChannelBasicInfo);