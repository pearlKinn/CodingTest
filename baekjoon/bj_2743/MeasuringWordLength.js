"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let word = fs.readFileSync(filePath).toString().trim();

console.log(word.length);
