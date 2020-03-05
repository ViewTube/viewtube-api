import users from './users/users.service.js'
// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(users)
}
