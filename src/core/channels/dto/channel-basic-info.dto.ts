import { AuthorThumbnailDto } from "src/core/videos/dto/author-thumbnail.dto";

export class ChannelBasicInfoDto {
  authorId: string;
  author: string;
  authorUrl?: string;
  authorThumbnails?: Array<AuthorThumbnailDto>
  authorThumbnailUrl?: string;
  authorVerified?: boolean;
}