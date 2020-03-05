import { ok } from 'assert'
import { service as _service } from '../../src/app'

describe('\'users\' service', () => {
  it('registered the service', () => {
    const service = _service('users')

    ok(service, 'Registered the service')
  })
})
