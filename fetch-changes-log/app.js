const yargs = require('yargs');
const axios = require('axios');
const argsOptions = require('./args.options.js')
const request = require('request');

const roleOption = {
    describe: 'Role of Jenkins',
    demand: true,
    alias: 'r'
};

const argv = yargs
    .command('fetch', 'Fetch the changes log from jenkins job build', {
        role: argsOptions.roleOption,
        apiKey: argsOptions.apiKeyOption,
        jobName: argsOptions.jobNameOption,
        host: argsOptions.hostOption,
        protocol: argsOptions.protocolOption,
        port: argsOptions.portOption,
        buildNumber: argsOptions.buildNumberOption,
    })
    .help()
    .alias('help', 'h')
    .argv;

var command = argv._[0];

var apiUrl = argv.host + (argv.port !== undefined && typeof argv.port === 'number'? `:${argv.port}` : `80` );
apiUrl = `${argv.protocol}://${argv.role}:${argv.apiKey}@${apiUrl}/job/${argv.jobName}/${argv.buildNumber}/api/json`;

console.log(apiUrl);

// request({
// url: apiUrl,
// json: true
// }, (error, response, body) => {
//     if (error) {
//         console.log(error);
//         console.log(`Unable to connect to ${host} servers`);
//     } else {
//         console.log(body.changeSet.items[0].msg);
//     }
// });

axios.get(apiUrl
).then((response) => {
    console.log(response.data.changeSet.items[0].msg);
}).catch((e) => {
    console.log(e);
});

