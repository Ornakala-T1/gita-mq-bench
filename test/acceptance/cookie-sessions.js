// mq mq1795377026059575602 agent 5
// mq mq1795376927877503621 agent 5
// fleet2 gh1793571944195674549 agent 5
// fleet2 gh1793571912092800600 agent 5
// fleet2 gh1793571881089236145 agent 5
// fleet2 gh1793571848581754231 agent 5
// fleet2 gh1793571794293688744 agent 5
// fleet2 gh1793571764802895327 agent 5
// fleet2 gh1793571746915663067 agent 5
// fleet2 gh1793571718593752983 agent 5
// fleet2 gh1793571701127573312 agent 5
// fleet2 gh1793571683671466315 agent 5

var app = require('../../examples/cookie-sessions')
var request = require('supertest')

describe('cookie-sessions', function () {
  describe('GET /', function () {
    it('should display no views', function (done) {
      request(app)
      .get('/')
      .expect(200, 'viewed 1 times\n', done)
    })

    it('should set a session cookie', function (done) {
      request(app)
      .get('/')
      .expect('Set-Cookie', /session=/)
      .expect(200, done)
    })

    it('should display 1 view on revisit', function (done) {
      request(app)
      .get('/')
      .expect(200, 'viewed 1 times\n', function (err, res) {
        if (err) return done(err)
        request(app)
        .get('/')
        .set('Cookie', getCookies(res))
        .expect(200, 'viewed 2 times\n', done)
      })
    })
  })
})

function getCookies(res) {
  return res.headers['set-cookie'].map(function (val) {
    return val.split(';')[0]
  }).join('; ');
}
// fleet agent 5 1793542891570806775
// fleet agent 5 1793556069098228511
// fleet agent 5 1793556116256938062
