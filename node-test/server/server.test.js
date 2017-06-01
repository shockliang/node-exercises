const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello express response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello express')
                .end(done);
        });
    });
    
    describe('GET /bad', () => {
        it('should return json with erro message', (done) => {
            request(app)
                .get('/bad')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    })
                })
                .end(done);
        });
    });
    
    describe('/users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Shock Liang',
                        age: 35
                    })
                })
                .end(done);
        });
    });
    
});