import {
  timeSince,
  removeYoutubeFromUrl,
  getAuthorThumbnails,
  getVideoThumbnails,
  getAuthorThumbnailsForRecommended
} from '../../../utility.js'

export class Mapper {
  dataToVideo(source, channelSubCount = 0) {
    let video = {}
    try {
      const playerResponse = source.player_response
      const videoDetails = playerResponse.videoDetails
      const microformatData = playerResponse.microformat.playerMicroformatRenderer
      var url = 'https://www.youtube.com/subscribe_embed?channelid='
      video = {
        type: 'video',
        title: source.title,
        videoId: source.video_id,
        videoThumbnails: getVideoThumbnails(source.video_id),
        storyboards: [],
        description: videoDetails.shortDescription,
        descriptionHtml: videoDetails.shortDescription,
        published: source.published,
        publishedText: timeSince(new Date(source.published)),
        keywords: videoDetails.keywords,
        viewCount: parseInt(videoDetails.viewCount),
        likeCount: source.likes,
        dislikeCount: source.dislikes,
        paid: playerResponse.paidContentOverlay !== undefined,
        premium: false, // If it would be premium, it would fail to load
        isFamilyFriendly: microformatData.isFamilySafe,
        allowedRegions: microformatData.availableCountries,
        genre: source.media.category,
        genreUrl: removeYoutubeFromUrl(source.media.category_url),
        author: videoDetails.author,
        authorId: source.author.id,
        authorUrl: '/channel/' + source.author.id,
        authorThumbnails: getAuthorThumbnails(source.author.avatar),
        subCountText: channelSubCount,
        lengthSeconds: source.length_seconds,
        allowRatings: videoDetails.allowRatings,
        rating: videoDetails.averageRating,
        isListed: !microformatData.isUnlisted,
        liveNow: videoDetails.isLiveContent,
        isUpcoming:
          playerResponse.playabilityStatus.status === 'LIVE_STREAM_OFFLINE'
          && new Date(playerResponse.playabilityStatus.liveStreamability
            .liveStreamabilityRenderer.offlineSlate
            .liveStreamOfflineSlateRenderer.scheduledStartTime) > new Date.now(),
        dashUrl: 'https://invidio.us/api/manifest/dash/id/' + source.video_id,
        adaptiveFormats: playerResponse.streamingData.adaptiveFormats,
        formatStreams: source.formats.filter(value => {
          return value.bitrate !== undefined && value.audioQuality !== undefined
        }).map(vid => {
          if (vid.src !== undefined) {
            return vid
          } else {
            if (vid.cipher !== undefined) {
              const url = vid.cipher.replace('url=', '')
              vid.src = decodeURI(url)
            }
            return vid
          }
        }),
        captions: playerResponse.captions.playerCaptionsTracklistRenderer.captionTracks.map(value => {
          return {
            label: value.name.simpleText,
            languageCode: value.languageCode,
            url: `/api/v1/captions/${source.video_id}?label=${encodeURIComponent(value.name.simpleText)}`
          }
        }),
        recommendedVideos: source.related_videos.map(vid => {
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
            viewCount: vid.view_count
          }
        })
      }
    } catch (error) {
      throw new Error(error.message)
    }

    return video
  }
}