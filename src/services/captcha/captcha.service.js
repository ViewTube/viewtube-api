import hooks from './captcha.hooks.js'
import createModel from '../../models/captcha.model.js'
import { Captcha } from './captcha.class.js'

export default function (app) {
  const options = {
    Model: createModel(app)
  }

  app.use('/captcha', new Captcha(options, app))

  const service = app.service('captcha')

  service.hooks(hooks)
}
