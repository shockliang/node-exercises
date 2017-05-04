// var obj = {
//     name: 'Shock'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Shock", "age": 34}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originaNote = {
    title:'Some title',
    body:'Some body'
};
var originaNoteString = JSON.stringify(originaNote);

fs.writeFileSync('notes.json', originaNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
