import { ok } from 'assert'
import { service as _service } from '../../src/app'

describe('\'user\' service', () => {
  it('registered the service', () => {
    const service = _service('user')

    ok(service, 'Registered the service')
  })
})
