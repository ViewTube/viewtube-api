import NeDB from 'nedb'
import { join } from 'path'

export default function (app) {
  const dbPath = app.get('nedb')
  const Model = new NeDB({
    filename: join(dbPath, 'users.db'),
    autoload: true
  })

  Model.ensureIndex({ fieldName: 'username', unique: true })

  return Model
}
