const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Shock',
        likes: [
            'Basketball',
            'Gundam'
        ]
    })
});

app.get('/bad', (req, res) => {
    res.send({
        msg: 'Something wrong!',
        errorCode: 9487
    })
});

app.listen(3000);