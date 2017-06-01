const utils = require('./utils');
const expected = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expected(res).toBe(44).toBeA('number');
});

it('should square number', () => {
    var res = utils.square(3);

    expected(res).toBe(9).toBeA('number');
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