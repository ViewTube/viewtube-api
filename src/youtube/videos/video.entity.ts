import { videoInfo } from 'ytdl-core';
import { IVideo } from './interfaces/video.interface';
import { Common } from '../common';
import { Expose } from 'class-transformer';

export class VideoEntity implements IVideo {
  constructor(private source: Partial<videoInfo>) {
    Object.assign(this, source);
  }

  playerResponse = this.source.player_response;
  videoDetails = this.playerResponse.videoDetails;
  microformatData = this.playerResponse.microformat.playerMicroformatRenderer;

  type = 'video';

  title: string;

  @Expose({ name: 'videoId' })
  video_id: string;

  videoThumbnails = Common.getVideoThumbnails(this.source.video_id);

  storyboards = [];

  description: string;

  descriptionHtml = this.source.description;

  published: number;

  publishedText = Common.timeSince(new Date(this.source.published));

  keywords = this.videoDetails.keywords;

  viewCount = this.videoDetails.viewCount;

  @Expose({ name: 'likeCount' })
  likes: number;

  @Expose({ name: 'dislikeCount' })
  dislikes: number;

  paid = playerResponse.paidContentOverlay !== undefined;

  premium = false; // If it would be premium, it would fail to load

  isFamilyFriendly = microformatData.isFamilySafe;

  allowedRegions = microformatData.availableCountries;

  genre = source.media.category;

  genreUrl = removeYoutubeFromUrl(source.media.category_url);

  author = videoDetails.author;

  authorId = source.author.id;

  authorUrl = '/channel/' + source.author.id;

  authorThumbnails = getAuthorThumbnails(source.author.avatar);

  subCountText = channelSubCount;

  lengthSeconds = source.length_seconds;

  allowRatings = videoDetails.allowRatings;

  rating = videoDetails.averageRating;

  isListed = !microformatData.isUnlisted;

  liveNow = videoDetails.isLiveContent;

  isUpcoming =
    playerResponse.playabilityStatus.status === 'LIVE_STREAM_OFFLINE' &&
    new Date(
      playerResponse.playabilityStatus.liveStreamability.liveStreamabilityRenderer.offlineSlate.liveStreamOfflineSlateRenderer.scheduledStartTime,
    ) > new Date.now();

  dashUrl = 'https://invidio.us/api/manifest/dash/id/' + source.video_id;

  adaptiveFormats = playerResponse.streamingData.adaptiveFormats;

  formatStreams = source.formats
    .filter(value => {
      return value.bitrate !== undefined && value.audioQuality !== undefined;
    })
    .map(vid => {
      if (vid.src !== undefined) {
        return vid;
      } else {
        if (vid.cipher !== undefined) {
          const url = vid.cipher.replace('url=', '');
          vid.src = decodeURI(url);
        }
        return vid;
      }
    });

  captionTracks =
    playerResponse.captions.playerCaptionsTracklistRenderer.captionTracks;

  captions = captionTracks
    ? captionTracks.map(value => {
        return {
          label: value.name.simpleText,
          languageCode: value.languageCode,
          url: `/api/v1/captions/${source.video_id}?label=${encodeURIComponent(
            value.name.simpleText,
          )}`,
        };
      })
    : [];

  recommendedVideos = source.related_videos.map(vid => {
    return {
      videoId: vid.id,
      title: vid.title,
      videoThumbnails: getVideoThumbnails(vid.id),
      author: vid.author,
      authorUrl: `/channel/${vid.ucid}`,
      authorId: vid.ucid,
      authorThumbnails: getAuthorThumbnailsForRecommended(vid.author_thumbnail),
      lengthSeconds: vid.length_seconds,
      viewCountText: vid.short_view_count_text,
      viewCount: vid.view_count,
    };
  });
}
