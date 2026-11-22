// mq mq1795377225944182753 agent 9
// mq mq1795377129465019101 agent 9
// mq mq1795377026059575602 agent 9
// mq mq1795376927877503621 agent 9
// fleet2 gh1793571944195674549 agent 9
// fleet2 gh1793571912092800600 agent 9
// fleet2 gh1793571881089236145 agent 9
// fleet2 gh1793571848581754231 agent 9
// fleet2 gh1793571794293688744 agent 9

var app = require('../../examples/error-pages')
  , request = require('supertest');

describe('error-pages', function(){
  describe('GET /', function(){
    it('should respond with page list', function(done){
      request(app)
      .get('/')
      .expect(/Pages Example/, done)
    })
  })

  describe('Accept: text/html',function(){
    describe('GET /403', function(){
      it('should respond with 403', function(done){
        request(app)
        .get('/403')
        .expect(403, done)
      })
    })

    describe('GET /404', function(){
      it('should respond with 404', function(done){
        request(app)
        .get('/404')
        .expect(404, done)
      })
    })

    describe('GET /500', function(){
      it('should respond with 500', function(done){
        request(app)
        .get('/500')
        .expect(500, done)
      })
    })
  })

  describe('Accept: application/json',function(){
    describe('GET /403', function(){
      it('should respond with 403', function(done){
        request(app)
        .get('/403')
        .set('Accept','application/json')
        .expect(403, done)
      })
    })

    describe('GET /404', function(){
      it('should respond with 404', function(done){
        request(app)
        .get('/404')
        .set('Accept','application/json')
        .expect(404, { error: 'Not found' }, done)
      })
    })

    describe('GET /500', function(){
      it('should respond with 500', function(done){
        request(app)
        .get('/500')
        .set('Accept', 'application/json')
        .expect(500, done)
      })
    })
  })


  describe('Accept: text/plain',function(){
    describe('GET /403', function(){
      it('should respond with 403', function(done){
        request(app)
        .get('/403')
        .set('Accept','text/plain')
        .expect(403, done)
      })
    })

    describe('GET /404', function(){
      it('should respond with 404', function(done){
        request(app)
        .get('/404')
        .set('Accept', 'text/plain')
        .expect(404)
        .expect('Not found', done);
      })
    })

    describe('GET /500', function(){
      it('should respond with 500', function(done){
        request(app)
        .get('/500')
        .set('Accept','text/plain')
        .expect(500, done)
      })
    })
  })
})
// fleet agent 9 1793542891570759873
// fleet agent 9 1793556116257249959
