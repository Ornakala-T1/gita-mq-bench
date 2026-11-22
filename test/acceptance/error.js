// mq mq1795378935864029193 agent 10
// mq mq1795378006384514945 agent 10
// mq mq1795377323586833145 agent 10
// mq mq1795377225944182753 agent 10
// mq mq1795377129465019101 agent 10
// mq mq1795377026059575602 agent 10
// mq mq1795376927877503621 agent 10
// fleet2 gh1793571944195674549 agent 10
// fleet2 gh1793571912092800600 agent 10
// fleet2 gh1793571881089236145 agent 10
// fleet2 gh1793571848581754231 agent 10
// fleet2 gh1793571794293688744 agent 10

var app = require('../../examples/error')
  , request = require('supertest');

describe('error', function(){
  describe('GET /', function(){
    it('should respond with 500', function(done){
      request(app)
        .get('/')
        .expect(500,done)
    })
  })

  describe('GET /next', function(){
    it('should respond with 500', function(done){
      request(app)
        .get('/next')
        .expect(500,done)
    })
  })

  describe('GET /missing', function(){
    it('should respond with 404', function(done){
      request(app)
        .get('/missing')
        .expect(404,done)
    })
  })
})
// fleet agent 10 1793542891571475799
// fleet agent 10 1793556116257402762
