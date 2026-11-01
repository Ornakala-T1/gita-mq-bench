// fleet2 gh1793571912092800600 agent 6
// fleet2 gh1793571881089236145 agent 6
// fleet2 gh1793571848581754231 agent 6
// fleet2 gh1793571794293688744 agent 6

var app = require('../../examples/cookies')
  , request = require('supertest');
var utils = require('../support/utils');

describe('cookies', function(){
  describe('GET /', function(){
    it('should have a form', function(done){
      request(app)
      .get('/')
      .expect(/<form/, done);
    })

    it('should respond with no cookies', function(done){
      request(app)
      .get('/')
      .expect(utils.shouldNotHaveHeader('Set-Cookie'))
      .expect(200, done)
    })

    it('should respond to cookie', function(done){
      request(app)
      .post('/')
      .type('urlencoded')
      .send({ remember: 1 })
      .expect(302, function(err, res){
        if (err) return done(err)
        request(app)
        .get('/')
        .set('Cookie', res.headers['set-cookie'][0])
        .expect(200, /Remembered/, done)
      })
    })
  })

  describe('GET /forget', function(){
    it('should clear cookie', function(done){
      request(app)
      .post('/')
      .type('urlencoded')
      .send({ remember: 1 })
      .expect(302, function(err, res){
        if (err) return done(err)
        request(app)
        .get('/forget')
        .set('Cookie', res.headers['set-cookie'][0])
        .expect('Set-Cookie', /remember=;/)
        .expect(302, done)
      })
    })
  })

  describe('POST /', function(){
    it('should set a cookie', function(done){
      request(app)
      .post('/')
      .type('urlencoded')
      .send({ remember: 1 })
      .expect('Set-Cookie', /remember=1/)
      .expect(302, done)
    })

    it('should no set cookie w/o reminder', function(done){
      request(app)
      .post('/')
      .send({})
      .expect(utils.shouldNotHaveHeader('Set-Cookie'))
      .expect(302, done)
    })
  })
})
// fleet agent 6 1793542891569011566
// fleet agent 6 1793556116257541837
