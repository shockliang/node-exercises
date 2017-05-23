const request = require('request');
var cfg = require('./.config/config');
console.log(JSON.stringify(cfg));
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .option({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results,undefined, 4));
//     }
// });

request({
    url: `https://api.darksky.net/forecast/${cfg.key}/37.8267,-122.4233`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Forecast.io server.')
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
        console.log(`Current temprature:${body.currently.temperature}`);
    }
});