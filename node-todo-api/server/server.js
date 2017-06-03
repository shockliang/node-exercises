var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    completeAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text:'  Edit this script.  '
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo',e);
});

// user

var User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    name: 'Shock',
    email: 'shock@948794crown.com'
});

newUser.save().then((doc) => {
    console.log('Saved user. ', doc);
}, (e) => {
    console.log('Unable to save user.', e)
});