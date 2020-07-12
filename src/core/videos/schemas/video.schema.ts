import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VideoDto } from 'src/core/videos/dto/video.dto';
import { RecommendedVideoDto } from 'src/core/videos/dto/recommended-video.dto';
import { VideoThumbnailDto } from 'src/core/videos/dto/video-thumbnail.dto';
import { AuthorThumbnailDto } from 'src/core/videos/dto/author-thumbnail.dto';

@Schema({ timestamps: true })
export class Video extends Document implements VideoDto {
  @Prop({ index: { unique: true } })
  videoId: string;
  type: string;
  title: string;
  videoThumbnails: VideoThumbnailDto[];
  storyboards: object;
  description: string;
  descriptionHtml: string;
  published: number;
  publishedText: string;
  keywords: string[];
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  paid: boolean;
  premium: boolean;
  isFamilyFriendly: boolean;
  allowedRegions: string[];
  genre: string;
  genreUrl: string;
  author: string;
  authorId: string;
  authorUrl: string;
  authorThumbnails: AuthorThumbnailDto[];
  authorVerified: boolean;
  subCount: number;
  lengthSeconds: number;
  allowRatings: boolean;
  rating: string;
  isListed: boolean;
  liveNow: boolean;
  isUpcoming: boolean;
  dashUrl: string;
  adaptiveFormats: object[];
  formatStreams: object[];
  captions: object;
  recommendedVideos: RecommendedVideoDto[];
}

export const VideoSchema = SchemaFactory.createForClass(Video);