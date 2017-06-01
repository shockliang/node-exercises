const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Shock', 35);
        expect(spy).toHaveBeenCalledWith('Shock', 35);
    });

    it('should call saveUser with user object', () => {
        var email = 'someone@948794crown.com';
        var password = '948794crown';
        
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});