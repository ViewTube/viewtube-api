import hooks from './endscreen.hooks.js'
import createModel from '../../models/endscreen.model.js'
import { Endscreen } from './endscreen.class.js'

export default function (app) {
  const options = {
    Model: createModel(app)
  }

  app.use('/endscreen', new Endscreen(options, app))

  const service = app.service('endscreen')

  service.hooks(hooks)
}
