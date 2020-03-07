import nedb from 'feathers-nedb'

export class User extends nedb.Service {
  setup(app) {
    this.app = app;
  }
  async create(data) {
    const Captcha = this.app.service('captcha')
    const captchaVerification = await Captcha.create({ token: data.captchaToken, solution: data.captchaSolution })
    if (captchaVerification.success) {
      const user = await this._create(data)
      return {
        username: user.username,
        success: true
      }
    }
  }
}
