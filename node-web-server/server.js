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

app.listen(3000);