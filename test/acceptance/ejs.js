// mq mq1795379885430725910 agent 8
// mq mq1795378935864029193 agent 8
// mq mq1795378006384514945 agent 8
// mq mq1795377323586833145 agent 8
// mq mq1795377225944182753 agent 8
// mq mq1795377129465019101 agent 8
// mq mq1795377026059575602 agent 8
// mq mq1795376927877503621 agent 8
// fleet2 gh1793571944195674549 agent 8
// fleet2 gh1793571912092800600 agent 8
// fleet2 gh1793571881089236145 agent 8
// fleet2 gh1793571848581754231 agent 8
// fleet2 gh1793571794293688744 agent 8

var request = require('supertest')
  , app = require('../../examples/ejs');

describe('ejs', function(){
  describe('GET /', function(){
    it('should respond with html', function(done){
      request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)
      .expect(/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/)
      .expect(/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)
      .expect(200, done)
    })
  })
})
// fleet agent 8 1793542891571115995
// fleet agent 8 1793556116257323463
