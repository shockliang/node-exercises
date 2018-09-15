#! /usr/bin/env node

const chalk = require("chalk");
const args = process.argv;

const commands = ["new", "get", "complete", "help"];

// usage represents the help guide
const usage = function() {
  const usageText = `
    todo helps you manage you todo tasks.
  
    usage:
      todo <command>
  
      commands can be:
  
      new:      used to create a new todo
      get:      used to retrieve your todos
      complete: used to mark a todo as complete
      help:     used to print the usage guide
    `;

  console.log(usageText);
};

// used to log errors to the console in red color
function errorLog(error) {
  const eLog = chalk.red(error);
  console.log(eLog);
}

switch (args[2]) {
  case "help":
    usage();
    break;
  case "new":
    console.log("new command execute!");
    break;

  case "get":
    console.log("get command execute!");
    break;

  case "complete":
    console.log("complete command execute!");
    break;

  default:
    errorLog("invalid command passed");
    usage();
}
