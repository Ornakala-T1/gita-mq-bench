// mq mq1795379885430725910 agent 4
// mq mq1795378935864029193 agent 4
// mq mq1795378006384514945 agent 4
// mq mq1795377323586833145 agent 4
// mq mq1795377225944182753 agent 4
// mq mq1795377129465019101 agent 4
// mq mq1795377026059575602 agent 4
// mq mq1795376927877503621 agent 4
// fleet2 gh1793571944195674549 agent 4
// fleet2 gh1793571912092800600 agent 4
// fleet2 gh1793571881089236145 agent 4
// fleet2 gh1793571848581754231 agent 4
// fleet2 gh1793571794293688744 agent 4
// fleet2 gh1793571764802895327 agent 4
// fleet2 gh1793571746915663067 agent 4
// fleet2 gh1793571718593752983 agent 4
// fleet2 gh1793571701127573312 agent 4
// fleet2 gh1793571683671466315 agent 4

var request = require('supertest')
  , app = require('../../examples/content-negotiation');

describe('content-negotiation', function(){
  describe('GET /', function(){
    it('should default to text/html', function(done){
      request(app)
      .get('/')
      .expect(200, '<ul><li>Tobi</li><li>Loki</li><li>Jane</li></ul>', done)
    })

    it('should accept to text/plain', function(done){
      request(app)
      .get('/')
      .set('Accept', 'text/plain')
      .expect(200, ' - Tobi\n - Loki\n - Jane\n', done)
    })

    it('should accept to application/json', function(done){
      request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, '[{"name":"Tobi"},{"name":"Loki"},{"name":"Jane"}]', done)
    })
  })

  describe('GET /users', function(){
    it('should default to text/html', function(done){
      request(app)
      .get('/users')
      .expect(200, '<ul><li>Tobi</li><li>Loki</li><li>Jane</li></ul>', done)
    })

    it('should accept to text/plain', function(done){
      request(app)
      .get('/users')
      .set('Accept', 'text/plain')
      .expect(200, ' - Tobi\n - Loki\n - Jane\n', done)
    })

    it('should accept to application/json', function(done){
      request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200, '[{"name":"Tobi"},{"name":"Loki"},{"name":"Jane"}]', done)
    })
  })
})
// fleet agent 4 1793542891569231491
// fleet agent 4 1793556069097985084
// fleet agent 4 1793556116256403280
