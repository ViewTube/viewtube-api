import NeDB from 'nedb'
import { join } from 'path'

export default function (app) {
  const dbPath = app.get('nedb')
  const Model = new NeDB({
    filename: join(dbPath, 'captcha.db'),
    autoload: true
  })

  Model.ensureIndex({ fieldName: 'clientToken', unique: true })

  return Model
}
