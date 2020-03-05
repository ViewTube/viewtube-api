import Authentication from '@feathersjs/authentication'
import LocalAuthentication from '@feathersjs/authentication-local'
import oauth from '@feathersjs/authentication-oauth'

export default app => {
  const authentication = new Authentication.AuthenticationService(app)

  authentication.register('jwt', new Authentication.JWTStrategy())
  authentication.register('local', new LocalAuthentication.LocalStrategy())

  app.use('/authentication', authentication)
  app.configure(oauth.expressOauth())
}
