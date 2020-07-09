import { videoInfo } from 'ytdl-core';
import { VideoDto } from './dto/video.dto';
import { Common } from '../common';
import { Expose, Exclude } from 'class-transformer';
import humanizeDuration from 'humanize-duration';
import { AuthorThumbnailDto } from './dto/author-thumbnail.dto';
import { VideoThumbnailDto } from './dto/video-thumbnail.dto';

export class VideoEntity implements VideoDto {
  constructor(private _source: Partial<videoInfo>) { }

  @Exclude()
  playerResponse = this._source.player_response;

  @Exclude()
  videoDetails = this.playerResponse.videoDetails;

  @Exclude()
  microformatData = this.playerResponse.microformat.playerMicroformatRenderer;

  type = 'video';

  title: string = this._source.title;

  videoId: string = this._source.video_id;

  videoThumbnails: Array<VideoThumbnailDto> = Common.getVideoThumbnails(this._source.video_id);

  storyboards: Array<object> = [];

  description: string = this._source.description;

  descriptionHtml: string = this._source.description;

  published: number = this._source.published;

  @Expose()
  get publishedText(): string {
    const durationString = humanizeDuration(
      new Date().valueOf() - new Date(this._source.published).valueOf(),
      { largest: 1 },
    );
    return `${durationString} ago`;
  }

  keywords: Array<string> = this.videoDetails.keywords;

  @Expose()
  get viewCount(): number {
    // Result of viewCount not predicable
    return parseFloat(this.videoDetails.viewCount.toString());
  }

  likeCount: number = this._source.likes;

  dislikeCount: number = this._source.dislikes;

  @Expose()
  get paid(): boolean {
    return (this.playerResponse as any)?.paidContentOverlay !== undefined;
  }

  premium = false; // If it would be premium, it would fail to load

  isFamilyFriendly: boolean = this.microformatData.isFamilySafe;

  genre: string = this._source.media.category;

  genreUrl: string = Common.removeYoutubeFromUrl(
    this._source.media.category_url,
  );

  author: string = this._source.author.name;

  authorId: string = this._source.author.id;

  authorUrl: string = '/channel/' + this._source.author.id;

  authorThumbnails: Array<AuthorThumbnailDto> = Common.getAuthorThumbnails(
    this._source.author.avatar,
  );

  authorVerified: boolean = this._source.author.verified;

  allowedRegions: Array<string> = this.microformatData.availableCountries;

  subCount: number = this._source.author.subscriber_count;

  lengthSeconds: number = parseInt(this._source.length_seconds) || 0;

  allowRatings: boolean = (this.videoDetails as any)?.allowRatings;

  rating: string = this._source.avg_rating;

  isListed = !this.microformatData.isUnlisted;

  liveNow: boolean = this.videoDetails.isLiveContent;

  @Expose()
  get isUpcoming(): boolean {
    return (
      this.playerResponse.playabilityStatus.status === 'LIVE_STREAM_OFFLINE' &&
      new Date(
        (this.playerResponse
          .playabilityStatus as any)?.liveStreamability?.liveStreamabilityRenderer.offlineSlate.liveStreamOfflineSlateRenderer.scheduledStartTime,
      ).valueOf() > Date.now()
    );
  }

  dashUrl: string =
    'https://invidio.us/api/manifest/dash/id/' + this._source.video_id;

  @Expose()
  get adaptiveFormats(): Array<object> {
    if (this.playerResponse.streamingData) {
      return this.playerResponse.streamingData.adaptiveFormats;
    } else {
      return [];
    }
  }

  @Expose()
  get formatStreams(): Array<object> {
    return this._source.formats
      .filter((value) => {
        return value.bitrate !== undefined && value.audioQuality !== undefined;
      })
      .map((vid) => {
        const video = vid as any;
        if (video.src !== undefined) {
          return vid;
        } else {
          if (video.cipher !== undefined) {
            const url = video.cipher.replace('url=', '');
            video.src = decodeURI(url);
          }
          return vid;
        }
      });
  }

  captionTracks: Array<any> = this.playerResponse.captions
    ?.playerCaptionsTracklistRenderer?.captionTracks;

  captions: Array<any> = this.captionTracks
    ? this.captionTracks.map((value) => {
      return {
        label: value.name.simpleText,
        languageCode: value.languageCode,
        url: `/api/v1/captions/${
          this._source.video_id
          }?label=${encodeURIComponent(value.name.simpleText)}`,
      };
    })
    : [];

  @Expose()
  get recommendedVideos() {
    return this._source.related_videos.map((vid) => {
      const video = vid as any;
      return {
        videoId: video.id,
        title: video.title,
        videoThumbnails: Common.getVideoThumbnails(video.id),
        author: video.author,
        authorUrl: `/channel/${video.video_id}`,
        authorId: video.video_id,
        authorThumbnails: Common.getAuthorThumbnailsForRecommended(
          video.author_thumbnail,
        ),
        lengthSeconds: video.length_seconds,
        viewCountText: video.short_view_count_text,
        viewCount: video.view_count,
      };
    });
  }
}
