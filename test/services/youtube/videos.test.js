import assert from 'assert'
import app from '../../src/app.js'
import axios from 'axios'

const port = _get('port') || 8998
const getUrl = pathname => format({
  hostname: _get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
})

describe('videos service', () => {
  it('test video response', () => {
    await axios.get(getUrl('videos?id=snjhDUQktMs'), {
      json: true
    }).then(result => {
      if (result.data.videoId)
        assert.ok(app.service, 'Response gotten')
    }).catch(err => {
      assert.fail(err)
    })
  })
})
