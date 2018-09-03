// const { createLogger, transports } = require("winston");
const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(
    new winston.transports.File({
      filename: "exceptions.log",
      handleExceptions: true
    })
  );
  winston.add(
    new winston.transports.File({
      filename: "logFile.log"
    })
  );
  winston.add(new winston.transports.Console());
  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      level: "error"
    })
  );

  winston.exitOnError = false;
};
