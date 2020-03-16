export class Mapper {
  dataToVideo(source) {
    let video = {}
    try {
      const playerResponse = source.player_response
      const videoDetails = playerResponse.videoDetails
      const microformatData = playerResponse.microformat.micoformatRenderer
      video = {
        'type': 'video',
        'title': source.title,
        'videoId': source.video_id,
        'videoThumbnails': videoDetails.thumbnail.thumbnails,
        'storyboards': [],
        'description': videoDetails.shortDescription,
        'descriptionHtml': videoDetails.shortDescription,
        'published': source.published,
        'publishedText': microformatData.publishDate,
        'keywords': [],
        'viewCount': videoDetails.viewCount,
        'likeCount': source.likes,
        'dislikeCount': source.dislikes,
        'paid': false,
        'premium': false,
        'isFamilyFriendly': microformatData.isFamilySafe,
        'allowedRegions': microformatData.availableCountries,
        'genre': 'Entertainment',
        'genreUrl': '/channel/UCi-g4cjqGV7jvU8aeSuj0jQ',
        'author': videoDetails.author,
        'authorId': microformatData.externalChannelId,
        'authorUrl': '/channel/' + microformatData.externalChannelId,
        'authorThumbnails': [
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s32-c-k-c0xffffffff-no-rj-mo',
            'width': 32,
            'height': 32
          },
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s48-c-k-c0xffffffff-no-rj-mo',
            'width': 48,
            'height': 48
          },
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s76-c-k-c0xffffffff-no-rj-mo',
            'width': 76,
            'height': 76
          },
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s100-c-k-c0xffffffff-no-rj-mo',
            'width': 100,
            'height': 100
          },
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s176-c-k-c0xffffffff-no-rj-mo',
            'width': 176,
            'height': 176
          },
          {
            'url': 'https://yt3.ggpht.com/a/AATXAJxZZO1kL52A99dYcOQHtqTwzRbxZk_f4uDU9g=s512-c-k-c0xffffffff-no-rj-mo',
            'width': 512,
            'height': 512
          }
        ],
        'subCountText': '7.7M',
        'lengthSeconds': source.length_seconds,
        'allowRatings': true,
        'rating': videoDetails.averageRating,
        'isListed': true,
        'liveNow': false,
        'isUpcoming': false,
        'dashUrl': 'https://invidio.us/api/manifest/dash/id/_066dEkycr4',
        'adaptiveFormats': [
          {
            'index': '741-4012',
            'bitrate': '5208272',
            'init': '0-740',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=302216025&dur=1330.729&lmt=1584318180579589&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRgIhAPwLMdL_rFZG_XYE0XHADwLSDbHbPS8IVEdvkuDqI-Q5AiEApMjdQdacXHy3X71tPB7kzaL1YlpE5GgcJMn0N1xVt-s%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '137',
            'type': 'video/mp4; codecs=\'avc1.640028\'',
            'clen': '302216025',
            'lmt': '1584318180579589',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '1080p',
            'qualityLabel': '1080p'
          },
          {
            'index': '739-4010',
            'bitrate': '2310289',
            'init': '0-738',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=155938778&dur=1330.729&lmt=1584318180581342&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRQIhAK4Ry7fm_chZywlastsIC_vWPsiuO5lwheRD8vU15tu5AiAn5ec5Gh6c70Ey30OZUH3MGOeDIin6ERVGA-UjuSiaSA%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '136',
            'type': 'video/mp4; codecs=\'avc1.4d401f\'',
            'clen': '155938778',
            'lmt': '1584318180581342',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '720p',
            'qualityLabel': '720p'
          },
          {
            'index': '739-4010',
            'bitrate': '1044393',
            'init': '0-738',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=82837051&dur=1330.729&lmt=1584318180581761&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRQIhAKf3nJDOw0igyAC0wcqoj1NpO869hnp3MiAittL8AU8hAiAYqAuZPlBPrT5yTyf9HiS1w8jlO-qMlSvFfRKWfn_Y1g%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '135',
            'type': 'video/mp4; codecs=\'avc1.4d401f\'',
            'clen': '82837051',
            'lmt': '1584318180581761',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '480p',
            'qualityLabel': '480p'
          },
          {
            'index': '739-4010',
            'bitrate': '601981',
            'init': '0-738',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=48528754&dur=1330.729&lmt=1584318180583630&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRgIhAL4zgJWMK5w_pOwdDmAs4xxpeTcRq-JFxSVN8hnc9ceYAiEAgSRMxKWDjnwntDN1znCf7ilh_9DIVD1QwD8vqOXo04s%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '134',
            'type': 'video/mp4; codecs=\'avc1.4d401e\'',
            'clen': '48528754',
            'lmt': '1584318180583630',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '360p',
            'qualityLabel': '360p'
          },
          {
            'index': '739-4010',
            'bitrate': '277859',
            'init': '0-738',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=25537028&dur=1330.729&lmt=1584318180578349&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRAIgMODAxrs4AWDAzMUJqcw6OCqLwVl29lwi3E_vUdFkhWoCIB4fWwfXsXgHLYGqJLgRm8BYeX3XBen-Qhpl2BvU3_ci&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '133',
            'type': 'video/mp4; codecs=\'avc1.4d4015\'',
            'clen': '25537028',
            'lmt': '1584318180578349',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '240p',
            'qualityLabel': '240p'
          },
          {
            'index': '738-4009',
            'bitrate': '119891',
            'init': '0-737',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=160&aitags=133%2C134%2C135%2C136%2C137%2C160&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=11222043&dur=1330.729&lmt=1584318180582968&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRgIhAOpicFOepp23p4FGwcLYH3FD4FRrH3Dm0cLjzAkWVTKpAiEAh5XObQraFjyQtOAzjqvdfTMlzipoL7_bM1FMzj63nnI%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '160',
            'type': 'video/mp4; codecs=\'avc1.4d400c\'',
            'clen': '11222043',
            'lmt': '1584318180582968',
            'projectionType': '1',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '144p',
            'qualityLabel': '144p'
          },
          {
            'index': '632-2271',
            'bitrate': '131548',
            'init': '0-631',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=140&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=audio%2Fmp4&gir=yes&clen=21537968&dur=1330.781&lmt=1584318222382958&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6411222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRgIhANyhf25d53O1xxamKnsVSix0ntHmqL9cUzpeiv1cnGzFAiEAiSIJvJ0vA3pNJ-XEZGLu-XkMU8Rm4w02NPQBhwwcqEU%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '140',
            'type': 'audio/mp4; codecs=\'mp4a.40.2\'',
            'clen': '21537968',
            'lmt': '1584318222382958',
            'projectionType': '1',
            'fps': 30,
            'container': 'm4a',
            'encoding': 'aac'
          },
          {
            'index': '266-2539',
            'bitrate': '56631',
            'init': '0-265',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=249&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=audio%2Fwebm&gir=yes&clen=8433161&dur=1330.741&lmt=1584318189090866&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6411222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRAIgNGxfjySvaKDQPk-rrNW9NoQkzdUyUGDCGvMPeoIy1PsCIFTOoLL8uV8Dh6E2N1Uk7skJXSVfFcOs5kfF-BMKNmvE&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '249',
            'type': 'audio/webm; codecs=\'opus\'',
            'clen': '8433161',
            'lmt': '1584318189090866',
            'projectionType': '1',
            'fps': 30,
            'container': 'webm',
            'encoding': 'opus'
          },
          {
            'index': '266-2540',
            'bitrate': '71800',
            'init': '0-265',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=250&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=audio%2Fwebm&gir=yes&clen=10657592&dur=1330.741&lmt=1584318162333012&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6411222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRAIgPmNXI7geUW0DRqY_lmLugftzGPHHaovtmy4uSyfEnhICIDetl1OX6FLF_6-jKzFwrKd35sY_s-isjbSaY6BdHY2q&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '250',
            'type': 'audio/webm; codecs=\'opus\'',
            'clen': '10657592',
            'lmt': '1584318162333012',
            'projectionType': '1',
            'fps': 30,
            'container': 'webm',
            'encoding': 'opus'
          },
          {
            'index': '266-2558',
            'bitrate': '131762',
            'init': '0-265',
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=251&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=audio%2Fwebm&gir=yes&clen=19180353&dur=1330.741&lmt=1584318172060692&mt=1584362672&fvip=1&keepalive=yes&fexp=23842630%2C23882514&c=WEB&txp=6411222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ADKhkGMwRgIhAOREU-Ca7E71Fq-6DvgoBxcNNwg6DCyV3yxGG4x2cxMrAiEAi8jS8STOM92a4bKZNuF5N5KgGjPhOKOcqM29sN9EJ38%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '251',
            'type': 'audio/webm; codecs=\'opus\'',
            'clen': '19180353',
            'lmt': '1584318172060692',
            'projectionType': '1',
            'fps': 30,
            'container': 'webm',
            'encoding': 'opus'
          }
        ],
        'formatStreams': [
          {
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=22&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=1330.782&lmt=1584318309232465&mt=1584362672&fvip=1&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRQIgM_NNtXQhMD0HnL0Oj9TeENONCb1SoPt0P5t9VdNEWaUCIQCjrJvYR0VrVVHOH0jLvqYO6-oayyb_iKExZFI4Kpae6Q%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '22',
            'type': 'video/mp4; codecs=\'avc1.64001F, mp4a.40.2\'',
            'quality': 'hd720',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '720p',
            'qualityLabel': '720p',
            'size': '1280x720'
          },
          {
            'url': 'https://r3---sn-ab5l6ndr.googlevideo.com/videoplayback?expire=1584384377&ei=GXVvXvuSMKbq8gTU-rK4BQ&ip=167.172.159.121&id=o-AG2maNZGbaUW7s0PLXyQkYRojsyZPhe6T413LrBs8Hk4&itag=18&source=youtube&requiressl=yes&hcs=yes&mh=59&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5szn7y&ms=au%2Crdu&mv=m&mvi=2&pl=24&shardbypass=yes&gcr=us&initcwndbps=122500&vprv=1&mime=video%2Fmp4&gir=yes&clen=69504309&ratebypass=yes&dur=1330.782&lmt=1584318270504933&mt=1584362672&fvip=1&fexp=23842630%2C23882514&c=WEB&txp=6416222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRQIgBXCznHJDiECR8Ri4aNww-MjwPvYN0xcsujZtSStzLFoCIQClq-FKiZ-qdNrcnmkhy8EbN01SwCRzKvTLng51NEYf2g%3D%3D&lsparams=hcs%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cshardbypass%2Cinitcwndbps&lsig=ABSNjpQwRgIhAJ7AWjIZHb7TUiLJJBjYzQiR4vmAZ9Q45mleZTvjBBoVAiEA35evakXmwcJ8sAepaJwt-xeqxdv2nsKl_wI_-xYGYjE%3D&host=r3---sn-ab5l6ndr.googlevideo.com',
            'itag': '18',
            'type': 'video/mp4; codecs=\'avc1.42001E, mp4a.40.2\'',
            'quality': 'medium',
            'fps': 30,
            'container': 'mp4',
            'encoding': 'h264',
            'resolution': '360p',
            'qualityLabel': '360p',
            'size': '640x360'
          }
        ],
        'captions': [
          {
            'label': 'English (auto-generated)',
            'languageCode': 'en',
            'url': '/api/v1/captions/_066dEkycr4?label=English+%28auto-generated%29'
          }
        ],
        'recommendedVideos': [
          {
            'videoId': 'c09m5f7Gnic',
            'title': 'Coronavirus: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/c09m5f7Gnic/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/c09m5f7Gnic/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1210,
            'viewCountText': '12M views',
            'viewCount': null
          },
          {
            'videoId': 'V781dJX34U4',
            'title': 'LIVE - Coronavirus: Lagebericht des Robert-Koch-Instituts, 16.3.2020',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/V781dJX34U4/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/V781dJX34U4/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'tagesschau',
            'authorUrl': null,
            'authorId': 'UC5NOEUbkLheQcaaRldYW5GA',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-YpCIg6dGUdc/AAAAAAAAAAI/AAAAAAAAAAA/xyz5hsVHf-U/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1826,
            'viewCountText': '132K views',
            'viewCount': null
          },
          {
            'videoId': '-SoZcjMWxm8',
            'title': 'Trump Addresses the Nation on the Coronavirus Pandemic: A Closer Look',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/-SoZcjMWxm8/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/-SoZcjMWxm8/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'Late Night with Seth Meyers',
            'authorUrl': null,
            'authorId': 'UCVTyTA7-g9nopHeHbeuvpRA',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 996,
            'viewCountText': '3.3M views',
            'viewCount': 3315291
          },
          {
            'videoId': '4Z4j2CrJRn4',
            'title': 'Washington DC Statehood: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/4Z4j2CrJRn4/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/4Z4j2CrJRn4/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1023,
            'viewCountText': '7.8M views',
            'viewCount': 7883742
          },
          {
            'videoId': '0UjpmT5noto',
            'title': 'Municipal Violations: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/0UjpmT5noto/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/0UjpmT5noto/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1075,
            'viewCountText': '9.1M views',
            'viewCount': 9134112
          },
          {
            'videoId': 'BWO6i8cH8SA',
            'title': 'Trump’s Coronavirus Address, Blooper Reel Included | The Daily Show',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/BWO6i8cH8SA/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/BWO6i8cH8SA/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'The Daily Show with Trevor Noah',
            'authorUrl': null,
            'authorId': 'UCwWhs_6x42TyRM4Wstoq8HA',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lYZk4150pXc/AAAAAAAAAAI/AAAAAAAAAAA/CR6MoHGaJiY/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 563,
            'viewCountText': '4.1M views',
            'viewCount': 4150158
          },
          {
            'videoId': 'OisMGE36eJ0',
            'title': 'NBC Nightly News Broadcast  (Full) - March 15th, 2020 | NBC Nightly News',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/OisMGE36eJ0/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/OisMGE36eJ0/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'NBC News',
            'authorUrl': null,
            'authorId': 'UCeY0bbntWzzVIaj2z3QigXg',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-xiyVh-oNzJE/AAAAAAAAAAI/AAAAAAAAAAA/5FaR9rGW-F4/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1304,
            'viewCountText': '648K views',
            'viewCount': 648521
          },
          {
            'videoId': 'rs2RlZQVXBU',
            'title': 'Mike Pence: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/rs2RlZQVXBU/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/rs2RlZQVXBU/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1227,
            'viewCountText': '16M views',
            'viewCount': 16607380
          },
          {
            'videoId': 'X9wHzt6gBgI',
            'title': 'Chickens: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/X9wHzt6gBgI/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/X9wHzt6gBgI/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1102,
            'viewCountText': '11M views',
            'viewCount': 11463940
          },
          {
            'videoId': 'gvZSpET11ZY',
            'title': 'Retirement Plans: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/gvZSpET11ZY/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/gvZSpET11ZY/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1290,
            'viewCountText': '14M views',
            'viewCount': 14897096
          },
          {
            'videoId': 'Fqw-9yMV0sI',
            'title': 'Coronavirus Is Our Future | Alanna Shaikh | TEDxSMU',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/Fqw-9yMV0sI/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/Fqw-9yMV0sI/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'TEDx Talks',
            'authorUrl': null,
            'authorId': 'UCsT0YIqwnpJCM-mx7-gSA4Q',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-yjj95JJQEm8/AAAAAAAAAAI/AAAAAAAAAAA/qkyW_xNpwSo/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1006,
            'viewCountText': '4M views',
            'viewCount': null
          },
          {
            'videoId': 'L0jQz6jqQS0',
            'title': 'Sex Education: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/L0jQz6jqQS0/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/L0jQz6jqQS0/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1265,
            'viewCountText': '20M views',
            'viewCount': 20443493
          },
          {
            'videoId': 'uYRo1DQA3uU',
            'title': 'Sanders slams Trumps handling of the coronavirus outbreak',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/uYRo1DQA3uU/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/uYRo1DQA3uU/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'CNN',
            'authorUrl': null,
            'authorId': 'UCupvZG-5ko_eiXAupbDfxWw',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-K12xTWC-rMI/AAAAAAAAAAI/AAAAAAAAAAA/2N_u5pcKB3w/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 653,
            'viewCountText': '257K views',
            'viewCount': 257915
          },
          {
            'videoId': '7rMEA6KN_RU',
            'title': 'Trump Contradicts Experts as Coronavirus Is Declared a Pandemic: A Closer Look',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/7rMEA6KN_RU/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/7rMEA6KN_RU/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'Late Night with Seth Meyers',
            'authorUrl': null,
            'authorId': 'UCVTyTA7-g9nopHeHbeuvpRA',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-TI5ffZo0Qd4/AAAAAAAAAAI/AAAAAAAAAAA/glgeFHJ0Sto/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 944,
            'viewCountText': '2.7M views',
            'viewCount': 2727790
          },
          {
            'videoId': 'i8xwLWb0lLY',
            'title': 'Food Waste: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/i8xwLWb0lLY/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/i8xwLWb0lLY/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1070,
            'viewCountText': '13M views',
            'viewCount': 13080732
          },
          {
            'videoId': 'o8yiYCHMAlM',
            'title': 'School Segregation: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/o8yiYCHMAlM/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/o8yiYCHMAlM/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1079,
            'viewCountText': '10M views',
            'viewCount': 10876971
          },
          {
            'videoId': 'aKhPbVN_Rbw',
            'title': 'When Rehearsal Becomes The Show: Stephen Colberts First-Ever No-Audience Late Show Monologue',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/aKhPbVN_Rbw/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/aKhPbVN_Rbw/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'The Late Show with Stephen Colbert',
            'authorUrl': null,
            'authorId': 'UCMtFAi84ehTSYSE9XoHefig',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-_DMSPt1vZaw/AAAAAAAAAAI/AAAAAAAAAAA/sSVARCDuXwE/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 798,
            'viewCountText': '4.7M views',
            'viewCount': 4766121
          },
          {
            'videoId': 'Wpzvaqypav8',
            'title': 'Infrastructure: Last Week Tonight with John Oliver (HBO)',
            'videoThumbnails': [
              {
                'quality': 'maxres',
                'url': 'https://invidio.us/vi/Wpzvaqypav8/maxres.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'maxresdefault',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/maxresdefault.jpg',
                'width': 1280,
                'height': 720
              },
              {
                'quality': 'sddefault',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/sddefault.jpg',
                'width': 640,
                'height': 480
              },
              {
                'quality': 'high',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/hqdefault.jpg',
                'width': 480,
                'height': 360
              },
              {
                'quality': 'medium',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/mqdefault.jpg',
                'width': 320,
                'height': 180
              },
              {
                'quality': 'default',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/default.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'start',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/1.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'middle',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/2.jpg',
                'width': 120,
                'height': 90
              },
              {
                'quality': 'end',
                'url': 'https://i.ytimg.com/vi/Wpzvaqypav8/3.jpg',
                'width': 120,
                'height': 90
              }
            ],
            'author': 'LastWeekTonight',
            'authorUrl': null,
            'authorId': 'UC3XTzVzaHQEd30rQbuvCtTQ',
            'authorThumbnails': [
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 32,
                'height': 32
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 48,
                'height': 48
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 76,
                'height': 76
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 100,
                'height': 100
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 176,
                'height': 176
              },
              {
                'url': 'https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
                'width': 512,
                'height': 512
              }
            ],
            'lengthSeconds': 1274,
            'viewCountText': '12M views',
            'viewCount': 12160161
          }
        ]
      }
    } catch (error) {
      throw new Error(error.message)
    }

    return video
  }

  parseNumber(numberString) {
    return parseInt(numberString.replace(/,/g, '').replace(/ /g, ''))
  }
}