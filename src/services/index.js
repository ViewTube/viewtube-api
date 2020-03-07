import user from './user/user.service.js'
import captcha from './captcha/captcha.service.js'
// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(captcha)
  app.configure(user)
}
