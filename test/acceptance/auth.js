// fleet2 gh1793571848581754231 agent 3
// fleet2 gh1793571794293688744 agent 3
// fleet2 gh1793571764802895327 agent 3
// fleet2 gh1793571746915663067 agent 3
// fleet2 gh1793571718593752983 agent 3
// fleet2 gh1793571701127573312 agent 3
// fleet2 gh1793571683671466315 agent 3
var app = require('../../examples/auth')
var request = require('supertest')

function getCookie(res) {
  return res.headers['set-cookie'][0].split(';')[0];
}

describe('auth', function(){
  describe('GET /',function(){
    it('should redirect to /login', function(done){
      request(app)
      .get('/')
      .expect('Location', '/login')
      .expect(302, done)
    })
  })

  describe('GET /login',function(){
    it('should render login form', function(done){
      request(app)
      .get('/login')
      .expect(200, /<form/, done)
    })

    it('should display login error for bad user', function (done) {
      request(app)
      .post('/login')
      .type('urlencoded')
      .send('username=not-tj&password=foobar')
      .expect('Location', '/login')
      .expect(302, function(err, res){
        if (err) return done(err)
        request(app)
        .get('/login')
        .set('Cookie', getCookie(res))
        .expect(200, /Authentication failed/, done)
      })
    })

    it('should display login error for bad password', function (done) {
      request(app)
        .post('/login')
        .type('urlencoded')
        .send('username=tj&password=nogood')
        .expect('Location', '/login')
        .expect(302, function (err, res) {
          if (err) return done(err)
          request(app)
            .get('/login')
            .set('Cookie', getCookie(res))
            .expect(200, /Authentication failed/, done)
        })
    })
  })

  describe('GET /logout',function(){
    it('should redirect to /', function(done){
      request(app)
      .get('/logout')
      .expect('Location', '/')
      .expect(302, done)
    })
  })

  describe('GET /restricted',function(){
    it('should redirect to /login without cookie', function(done){
      request(app)
      .get('/restricted')
      .expect('Location', '/login')
      .expect(302, done)
    })

    it('should succeed with proper cookie', function(done){
      request(app)
      .post('/login')
      .type('urlencoded')
      .send('username=tj&password=foobar')
      .expect('Location', '/')
      .expect(302, function(err, res){
        if (err) return done(err)
        request(app)
        .get('/restricted')
        .set('Cookie', getCookie(res))
        .expect(200, done)
      })
    })
  })

  describe('POST /login', function(){
    it('should fail without proper username', function(done){
      request(app)
      .post('/login')
      .type('urlencoded')
      .send('username=not-tj&password=foobar')
      .expect('Location', '/login')
      .expect(302, done)
    })

    it('should fail without proper password', function(done){
      request(app)
      .post('/login')
      .type('urlencoded')
      .send('username=tj&password=baz')
      .expect('Location', '/login')
      .expect(302, done)
    })

    it('should succeed with proper credentials', function(done){
      request(app)
      .post('/login')
      .type('urlencoded')
      .send('username=tj&password=foobar')
      .expect('Location', '/')
      .expect(302, done)
    })
  })
})
// fleet agent 3 1793542891569754575
// fleet agent 3 1793556069097833872
// fleet agent 3 1793556116256199640
