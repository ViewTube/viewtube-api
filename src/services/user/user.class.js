import nedb from 'feathers-nedb'

export class User extends nedb.Service {
  setup(app) {
    this.app = app;
  }

  async create(data) {
    const Captcha = this.app.service('captcha')
    const captchaVerification = await Captcha.create({ token: data.captchaToken, solution: data.captchaSolution })
    if (captchaVerification.success) {
      this.model.insert(data, (err, doc) => {
        if (err) {
          throw new Error('Error registering user')
        }
        if (doc) {
          return {
            username: user.username,
            success: true
          }
        }
      })
    }
  }
}
