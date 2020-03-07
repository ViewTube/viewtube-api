import Joi from '@hapi/joi'
import validate from '@feathers-plus/validate-joi'

const token = Joi.string().trim().required()
const solution = Joi.string().trim().required()
const schema = Joi.object().keys({
  token,
  solution
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
