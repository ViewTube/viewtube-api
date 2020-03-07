import { ok } from 'assert'
import { service } from '../src/app'

describe('authentication', () => {
  it('registered the authentication service', () => {
    ok(service('authentication'))
  })
  
  describe('local strategy', () => {
    const userInfo = {
      email: 'someone@example.com',
      password: 'supersecret'
    }

    before(async () => {
      try {
        await service('user').create(userInfo)
      } catch (error) {
        // Do nothing, it just means the user already exists and can be tested
      }
    })

    it('authenticates user and creates accessToken', async () => {
      const { user, accessToken } = await service('authentication').create({
        strategy: 'local',
        ...userInfo
      })
      
      ok(accessToken, 'Created access token for user')
      ok(user, 'Includes user in authentication data')
    })
  })
})
