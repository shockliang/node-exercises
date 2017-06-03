var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    complete: {
        type: Boolean
    },
    completeAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook dinner',
    complete: true,
    completeAt: 201706032152
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo',e);
});