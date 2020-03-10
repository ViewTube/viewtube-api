import authentication from '@feathersjs/authentication'
import localAuthentication from '@feathersjs/authentication-local'
import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'

import { adminRole } from '../../roles.js'

const { authenticate } = authentication.hooks
const { hashPassword, protect } = localAuthentication.hooks

const username = Joi.string().trim().required()
const password = Joi.string().trim().min(8).max(255).required()
const captchaToken = Joi.string().trim().required()
const captchaSolution = Joi.string().trim().required()
const schema = Joi.object().keys({
  username,
  password,
  captchaToken,
  captchaSolution
})

export default {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password'), validate.form(schema)],
    update: [hashPassword('password'), authenticate('jwt'), validate.form(schema)],
    patch: [hashPassword('password'), authenticate('jwt'), validate.form(schema)],
    remove: [authenticate('jwt')]
  },
  after: {
    all: [
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}