console.log('Starting notes.js');

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('add note');
  return 'New note';
};

module.exports.add = (a, b) => {
  return a + b;
};
