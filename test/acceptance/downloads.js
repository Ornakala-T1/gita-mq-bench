// mq mq1795376927877503621 agent 7
// fleet2 gh1793571944195674549 agent 7
// fleet2 gh1793571912092800600 agent 7
// fleet2 gh1793571881089236145 agent 7
// fleet2 gh1793571848581754231 agent 7
// fleet2 gh1793571794293688744 agent 7

var app = require('../../examples/downloads')
  , request = require('supertest');

describe('downloads', function(){
  describe('GET /', function(){
    it('should have a link to amazing.txt', function(done){
      request(app)
      .get('/')
      .expect(/href="\/files\/amazing.txt"/, done)
    })
  })

  describe('GET /files/notes/groceries.txt', function () {
    it('should have a download header', function (done) {
      request(app)
        .get('/files/notes/groceries.txt')
        .expect('Content-Disposition', 'attachment; filename=groceries.txt')
        .expect(200, done)
    })
  })

  describe('GET /files/amazing.txt', function(){
    it('should have a download header', function(done){
      request(app)
      .get('/files/amazing.txt')
      .expect('Content-Disposition', 'attachment; filename=amazing.txt')
      .expect(200, done)
    })
  })

  describe('GET /files/missing.txt', function(){
    it('should respond with 404', function(done){
      request(app)
      .get('/files/missing.txt')
      .expect(404, done)
    })
  })

  describe('GET /files/../index.js', function () {
    it('should respond with 403', function (done) {
      request(app)
        .get('/files/../index.js')
        .expect(403, done)
    })
  })
})
// fleet agent 7 1793542891570880727
// fleet agent 7 1793556116258110130
