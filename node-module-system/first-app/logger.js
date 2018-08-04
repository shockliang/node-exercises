// Making fake log url.
var url = "http://mylogger.io/log";

function log(message) {
  // Send an http request
  console.log(message);
}

// Export single function.
module.exports = log;