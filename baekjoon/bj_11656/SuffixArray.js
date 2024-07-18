"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let inputString = fs.readFileSync(filePath).toString().trim();

const suffixArray = [];
for (let i = 0; i < inputString.length; i++) {
  suffixArray.push(inputString.slice(i));
}

console.log(suffixArray.sort().join("\n"));
