import { videoInfo } from 'ytdl-core';
import { IVideo } from './interfaces/video.interface';
import { Common } from '../common';
import { Expose, Exclude } from 'class-transformer';

export class VideoEntity implements IVideo {
  constructor(private _source: Partial<videoInfo>) {
    Object.assign(this, _source);
  }

  @Exclude()
  channelSubCount = 0;

  @Exclude()
  playerResponse = this._source.player_response;

  @Exclude()
  videoDetails = this.playerResponse.videoDetails;

  @Exclude()
  microformatData = this.playerResponse.microformat.playerMicroformatRenderer;

  type = 'video';

  title: string;

  videoId: string = this._source.video_id;

  videoThumbnails = Common.getVideoThumbnails(this._source.video_id);

  storyboards: Array<object> = [];

  description: string;

  descriptionHtml: string = this._source.description;

  published: number;

  publishedText: string = Common.timeSince(new Date(this._source.published));

  keywords: Array<string> = this.videoDetails.keywords;

  viewCount: number = this.videoDetails.viewCount;

  likeCount: number = this._source.likes;

  dislikeCount: number = this._source.dislikes;

  @Expose()
  get paid(): boolean {
    return (this.playerResponse as any)?.paidContentOverlay !== undefined;
  }

  premium = false; // If it would be premium, it would fail to load

  isFamilyFriendly: boolean = this.microformatData.isFamilySafe;

  allowedRegions: Array<string> = this.microformatData.availableCountries;

  genre: string = this._source.media.category;

  genreUrl: string = Common.removeYoutubeFromUrl(
    this._source.media.category_url,
  );

  author: string = this._source.author.name;

  authorId: string = this._source.author.id;

  authorUrl: string = '/channel/' + this._source.author.id;

  authorThumbnails: Array<object> = Common.getAuthorThumbnails(
    this._source.author.avatar,
  );

  authorVerified: boolean = this._source.author.verified;

  subCountText: string = this.channelSubCount.toString();

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

  adaptiveFormats: Array<object> = this.playerResponse.streamingData
    .adaptiveFormats;

  @Expose()
  get formatStreams(): Array<object> {
    return this._source.formats
      .filter(value => {
        return value.bitrate !== undefined && value.audioQuality !== undefined;
      })
      .map(vid => {
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
    .playerCaptionsTracklistRenderer.captionTracks;

  captions: Array<any> = this.captionTracks
    ? this.captionTracks.map(value => {
        return {
          label: value.name.simpleText,
          languageCode: value.languageCode,
          url: `/api/v1/captions/${
            this._source.video_id
          }?label=${encodeURIComponent(value.name.simpleText)}`,
        };
      })
    : [];

  recommendedVideos: Array<object> = this._source.related_videos.map(vid => {
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
