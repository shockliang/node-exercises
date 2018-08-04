const EventEmitter = require("events");

// Making fake log url.
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an http request
    console.log(message);
    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// Export single function.
module.exports = Logger;
