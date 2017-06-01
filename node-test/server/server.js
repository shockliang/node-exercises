const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello express');
});

app.get('/bad', (req, res) => {
    res.status(404).send({
        error: 'Page not found',

    });
});

// GET /users
// Give user a name property and age property
app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Shock Liang',
        age: 35
    }, {
        name: 'Gandalf',
        age: 2012
    }])
});

app.listen(3000);

module.exports.app = app;