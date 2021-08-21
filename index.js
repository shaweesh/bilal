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
const { BANNER , LOCAL_STORAGE_PATH} = require("./constants");

// Setting up localStorage
const { LocalStorage } = require("node-localstorage");
localStorage = new LocalStorage(LOCAL_STORAGE_PATH);

const main = async () => {
  const storageKey = `bilalPrayer`;
  const item = localStorage.getItem(storageKey);
  let argv = require('minimist')(process.argv.slice(2));
  let daySaveTime = argv.d ?? 'false';
  if (item != undefined && argv.d == undefined) {
    daySaveTime = item;
  } else {
    localStorage.setItem(storageKey, daySaveTime);
  }
  // Prinitng a banner ('cause I'm cool and I can do it XD)
  green(BANNER);
  
  console.log();
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
