const express = require('express');
const hbs = require('hbs');

var app = express();
var thisYear = new Date().getFullYear();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: thisYear,
        welcomeMessage: 'Welcome to here'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: thisYear
    });
});

app.get('/bad', (req, res) => {
    res.send({
        msg: 'Something wrong!',
        errorCode: 9487
    })
});

app.listen(3000, () => {
    console.log('Server is up on the port 3000');
})