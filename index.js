#!/usr/bin/env node

// Project's dependencies
const chalk = require("chalk");
const args = process.argv;
const {
  displayResult,
  getSalah
} = require("./utils.js");
// Logging functioin
const green = msg => console.log(chalk.green(msg));

// Project's data
const { BANNER } = require("./constants");


const main = async () => {
  // Prinitng a banner ('cause I'm cool and I can do it XD)
  green(BANNER);
  const daySaveTime = args[2] ?? 0;
  try {
    prayers = getSalah(daySaveTime);
  } catch (ex) {
    console.error("Someting bad happened");
    return;
  }

  displayResult(prayers);
};

(async () => {
  console.time("Execution Time");
  await main();
  console.timeEnd("Execution Time");
})();
