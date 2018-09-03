// const { createLogger, transports } = require("winston");
const winston = require("winston");
require("winston-mongodb");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const config = require("config");

const express = require("express");
require("express-async-errors");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();

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

// const p = Promise.reject(new Error("Something failed miserably!"));
// p.then(() => console.log("Done"));

// throw new Error("Failed during startup");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
