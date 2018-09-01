const winston = require("winston");

module.exports = function(err, req, res, next) {
  winston.error(err.message, err);
  // winston.log("error", err.message);

  // winston log level
  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send(`Error:${err}`);
};
