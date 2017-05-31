const roleOption = {
    describe: 'Role of Jenkins',
    demand: true,
    alias: 'r'
};

const apiKeyOption = {
    describe: 'Api key of Jenkins',
    demand: true,
    alias: 'k'
};

const jobNameOption = {
    describe: 'Job Name of Jenkins',
    demand: true,
    alias: 'jn'
};

const buildNumberOption = {
    describe: 'Build number of job',
    demand: true,
    alias: 'bn'
}

const hostOption = {
    describe: 'Host of Jenkins',
    demand: true
};

const protocolOption = {
    describe: 'Protocol to connect Jenkins',
    demand: false,
    alias: 'pt',
    default: 'http'
}

const portOption = {
    describe: 'The port of Jenkins',
    demand: false,
    alias: 'p',
    default: 80
}

const outputFileNameOption = {
    describe: 'File name to output',
    demand: false,
    alias: 'n',
    default: 'ChangesLog.html'
}

module.exports = {
    roleOption: roleOption,
    apiKeyOption: apiKeyOption,
    jobNameOption: jobNameOption,
    buildNumberOption, buildNumberOption,
    hostOption: hostOption,
    protocolOption: protocolOption,
    portOption: portOption,
    outputFileNameOption: outputFileNameOption
}


