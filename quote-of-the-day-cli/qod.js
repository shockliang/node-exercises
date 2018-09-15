#! /usr/bin/env node

const axios = require("axios");
const chalk = require("chalk");

const url = "https://quotes.rest/qod";

run();

async function run() {
  try {
    const response = await axios.get(url, {
      headers: { Accept: "application/json" }
    });

    const quote = response.data.contents.quotes[0].quote;
    const author = response.data.contents.quotes[0].author;
    const log = chalk.green(`${quote} - ${author}`); // we use chalk to set the color green on successful response
    console.log(log);
  } catch (ex) {
    const log = chalk.red(ex); // we set the color red here for errors.
    console.log(log);
  }
}
