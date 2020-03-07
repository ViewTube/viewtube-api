import { User } from './user.class.js'
import createModel from '../../models/user.model.js'
import hooks from './user.hooks.js'

export default function (app) {
  const captcha = app.service('captcha')

  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    captcha
  }

  app.use('/user', new User(options, app))

  const service = app.service('user')

  service.hooks(hooks)
}
