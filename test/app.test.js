import { strict as assert } from 'assert'
import { get } from 'axios'
import { format } from 'url'
import { get as _get, listen } from '../src/app'

const port = _get('port') || 8998
const getUrl = pathname => format({
  hostname: _get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
})

describe('Feathers application tests', () => {
  let server

  before(function (done) {
    server = listen(port)
    server.once('listening', () => done())
  })

  after(function (done) {
    server.close(done)
  })

  it('starts and shows the index page', async () => {
    const { data } = await get(getUrl())

    assert.ok(data.indexOf('<html lang="en">') !== -1)
  })

  describe('404', function () {
    it('shows a 404 HTML page', async () => {
      try {
        await get(getUrl('path/to/nowhere'), {
          headers: {
            'Accept': 'text/html'
          }
        })
        assert.fail('should never get here')
      } catch (error) {
        const { response } = error

        assert.equal(response.status, 404)
        assert.ok(response.data.indexOf('<html>') !== -1)
      }
    })

    it('shows a 404 JSON error without stack trace', async () => {
      try {
        await get(getUrl('path/to/nowhere'), {
          json: true
        })
        assert.fail('should never get here')
      } catch (error) {
        const { response } = error

        assert.equal(response.status, 404)
        assert.equal(response.data.code, 404)
        assert.equal(response.data.message, 'Page not found')
        assert.equal(response.data.name, 'NotFound')
      }
    })
  })
})
