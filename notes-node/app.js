console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');


// console.log(_.isString(true));
// console.log(_.isString('Shock'));

var filteredArray = _.uniq(['Shock Liang', 1, 'Shock Liang', 2, 3, 4]);
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);
//
// console.log('Result:', notes.add(9,-2));
// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}`);
