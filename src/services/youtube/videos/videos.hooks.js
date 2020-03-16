import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'

const id = Joi.string().trim().required()
const schema = Joi.object().keys({
  id
})

export default {
  before: {
    all: [validate.form(schema)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
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