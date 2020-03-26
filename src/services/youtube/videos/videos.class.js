import ytdl from 'ytdl-core'
import { Mapper } from './videos.mapper.js'

export class Video {
  setup(app) {
    this.app = app;
  }

  async find(params) {
    const url = 'https://youtube.com/watch?v=' + params.query.id
    let response = {}
    let retryCounter = 0
    let errorMessage
    do {
      try {
        response = await ytdl.getBasicInfo(url)
      } catch (err) {
        console.error(err)
        errorMessage = err.message
      }
      retryCounter++
    } while (Object.keys(response).length === 0 && retryCounter < 3);

    if (Object.keys(response).length === 0) {
      throw new Error('Error loading video: ' + errorMessage)
    }

    const mapper = new Mapper()
    return mapper.dataToVideo(response)
  }

  // async find(params) {
  //   const url = 'https://youtube.com/watch?v=' + params.query.id + '&pbj=1'
  //   const customRequest = axios.create({
  //     timeout: 10000,
  //     headers: {
  //       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
  //       'X-YouTube-Client-Name': 1,
  //       'X-YouTube-Client-Version': '2.20200312.05.00',
  //       'X-YouTube-Device': 'cbr=Firefox&cbrver=76.0&cos=Windows&cosver=10.0'
  //     }
  //   })
  //   return customRequest.get(url)
  //     .then(response => {
  //       const mapper = new Mapper()
  //       const video = mapper.dataToVideo(response.data)
  //       return video
  //     })
  //     .catch(err => {
  //       throw new Error('Error loading video: ' + err.message)
  //     })
  // }
}
