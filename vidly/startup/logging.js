const winston = require("winston");
const { combine, timestamp, label, printf } = winston.format;
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  process.on("unhandledRejection", ex => {
    throw ex;
  });

  const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });

  winston.add(
    new winston.transports.File({
      format: combine(label({ label: "excepton" }), timestamp(), myFormat),
      level: "error",
      filename: "exceptions.log",
      handleExceptions: true
    })
  );
  winston.add(
    new winston.transports.File({
      format: combine(label({ label: "info" }), timestamp(), myFormat),
      level: "info",
      filename: "logFile.log"
    })
  );

  winston.add(
    new winston.transports.Console({
      format: combine(label({ label: "Console" }), timestamp(), myFormat),
      level: "info"
    })
  );
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      level: "error"
    })
  );

  winston.exitOnError = false;
};
