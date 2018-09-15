#! /usr/bin/env node
const rl = require("readline");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const chalk = require("chalk");
const args = process.argv;

const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ todos: [] }).write();

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
    newTodo();
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

function prompt(question) {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  return new Promise((resolve, error) => {
    r.question(question, answer => {
      r.close();
      resolve(answer);
    });
  });
}

function newTodo() {
  const q = chalk.blue("Type in your todo\n");
  prompt(q).then(todo => {
    db.get("todos")
      .push({
        title: todo,
        complete: false
      })
      .write();
  });
}
