const utils = require('./utils');
const expected = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expected(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done)=> {
    utils.asyncAdd(4, 3, (sum) => {
        expected(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square number', () => {
    var res = utils.square(3);

    expected(res).toBe(9).toBeA('number');
});

it('should async square number', (done) => {
    utils.asyncSquare(3, (square) => {
        expected(square).toBe(9).toBeA('number');
        done();
    });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set first name and last name with proper values', () => {
    var user = {location:'Anywhere', age:35};
    var actual = utils.setName(user, 'Shock Liang');

    expected(actual).toInclude({
        firstName: 'Shock',
        lastName: 'Liang'
    });
});