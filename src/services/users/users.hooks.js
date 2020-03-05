import authentication from '@feathersjs/authentication'
import localAuthentication from '@feathersjs/authentication-local'
import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'

const { authenticate } = authentication.hooks
const { hashPassword, protect } = localAuthentication.hooks

const username = Joi.string().trim().required()
const password = Joi.string().trim().min(8).max(255).required()
const schema = Joi.object().keys({
  username,
  password
})

export default {
  before: {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword('password'), validate.form(schema)],
    update: [hashPassword('password'), authenticate('jwt'), validate.form(schema)],
    patch: [hashPassword('password'), authenticate('jwt'), validate.form(schema)],
    remove: [authenticate('jwt'), validate.form(schema)]
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