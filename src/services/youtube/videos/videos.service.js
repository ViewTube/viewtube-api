import { Video } from './videos.class.js'
import hooks from './videos.hooks.js'

export default function (app) {

  const options = {
  }

  app.use('/videos', new Video(options, app))

  const service = app.service('videos')

  service.hooks(hooks)
}
