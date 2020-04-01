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
    const playerResponse = source.player_response
    const videoDetails = playerResponse.videoDetails
    const microformatData = playerResponse.microformat.playerMicroformatRenderer
    var url = 'https://www.youtube.com/subscribe_embed?channelid='


    const type = 'video'

    const title = source.title

    const videoId = source.video_id

    const videoThumbnails = getVideoThumbnails(source.video_id)

    const storyboards = []

    const description = videoDetails.shortDescription

    const descriptionHtml = videoDetails.shortDescription

    const published = source.published

    const publishedText = timeSince(new Date(source.published))

    const keywords = videoDetails.keywords

    const viewCount = parseInt(videoDetails.viewCount)

    const likeCount = source.likes

    const dislikeCount = source.dislikes

    const paid = playerResponse.paidContentOverlay !== undefined

    const premium = false // If it would be premium, it would fail to load

    const isFamilyFriendly = microformatData.isFamilySafe

    const allowedRegions = microformatData.availableCountries

    const genre = source.media.category

    const genreUrl = removeYoutubeFromUrl(source.media.category_url)

    const author = videoDetails.author

    const authorId = source.author.id

    const authorUrl = '/channel/' + source.author.id

    const authorThumbnails = getAuthorThumbnails(source.author.avatar)

    const subCountText = channelSubCount

    const lengthSeconds = source.length_seconds

    const allowRatings = videoDetails.allowRatings

    const rating = videoDetails.averageRating

    const isListed = !microformatData.isUnlisted

    const liveNow = videoDetails.isLiveContent

    const isUpcoming =
      playerResponse.playabilityStatus.status === 'LIVE_STREAM_OFFLINE'
      && new Date(playerResponse.playabilityStatus.liveStreamability
        .liveStreamabilityRenderer.offlineSlate
        .liveStreamOfflineSlateRenderer.scheduledStartTime) > new Date.now()

    const dashUrl = 'https://invidio.us/api/manifest/dash/id/' + source.video_id

    const adaptiveFormats = playerResponse.streamingData.adaptiveFormats

    const formatStreams = source.formats.filter(value => {
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
    })

    const captionTracks = playerResponse.captions.playerCaptionsTracklistRenderer.captionTracks

    const captions = captionTracks ? captionTracks.map(value => {
      return {
        label: value.name.simpleText,
        languageCode: value.languageCode,
        url: `/api/v1/captions/${source.video_id}?label=${encodeURIComponent(value.name.simpleText)}`
      }
    }) : []

    const recommendedVideos = source.related_videos.map(vid => {
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

    return {
      type,
      title,
      videoId,
      videoThumbnails,
      storyboards,
      description,
      descriptionHtml,
      published,
      publishedText,
      keywords,
      viewCount,
      likeCount,
      dislikeCount,
      paid,
      premium,
      isFamilyFriendly,
      allowedRegions,
      genre,
      genreUrl,
      author,
      authorId,
      authorUrl,
      authorThumbnails,
      subCountText,
      lengthSeconds,
      allowRatings,
      rating,
      isListed,
      liveNow,
      isUpcoming,
      dashUrl,
      adaptiveFormats,
      formatStreams,
      captions,
      recommendedVideos
    }
  }
}