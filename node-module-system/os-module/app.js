const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var eol = os.EOL;
var arch = os.arch();
var cpus = os.cpus();
var networks = os.networkInterfaces();

console.log(`Total memory:${totalMemory / 1024 / 1024 / 1024} GB`);
console.log(`Free memory:${freeMemory / 1024 / 1024 / 1024} GB`);
console.log(`System arch:${arch}`);
cpus.forEach(cpu => {
  console.log(`Spent in user time:${cpu.times.user / 1000} seconds`);
});
console.log(networks);
