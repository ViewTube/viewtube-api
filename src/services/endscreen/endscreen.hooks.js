import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'

const videoId = Joi.string().trim().required()
const schema = Joi.object().keys({
  videoId
})

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validate.form(schema)],
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
};
