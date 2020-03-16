import { Template } from './template.class.js'
import hooks from './template.hooks.js'

export default function (app) {

  const options = {
  }

  app.use('/template', new Template(options, app))

  const service = app.service('template')

  service.hooks(hooks)
}
