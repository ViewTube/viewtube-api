import captcha from 'trek-captcha'
import fileSystem from 'fs'
import hat from 'hat'

export class Captcha {
  model

  constructor(options, app) {
    this.model = options.Model
  }

  async find() {
    const { token, buffer } = await captcha({ size: 6 })
    console.log(token)

    const clientToken = hat()
    const captchaImage = buffer.toString('base64')

    const captchaRecord = {
      clientToken,
      solution: token
    }

    this.model.insert(captchaRecord, (err, doc) => {
      if (err) {
        console.error('err', err)
      }
    })

    return {
      token: clientToken,
      captchaImage: `data:image/jpeg;base64,${captchaImage}`
    }
  }

  async create(data) {
    const result = await new Promise((resolve, reject) => {
      this.model.find({ 'clientToken': data.token }, (err, docs) => {
        if (docs.length > 0) {
          this.model.remove({ _id: docs[0]._id })
          resolve(docs)
        }
        resolve(err)
      })
    })
    if (result && result.length > 0) {
      if (result[0].solution === data.solution)
        return {
          success: true,
          title: 'Success',
          message: 'Captcha verified'
        }
    }
    throw new Error('Error verifying captcha. Please try a different one.')
  }
}
