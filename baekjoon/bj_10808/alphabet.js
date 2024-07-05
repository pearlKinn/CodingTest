"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let word = fs.readFileSync(filePath).toString().split("");
let alphabetCount = new Array(26).fill(0);

for (let char of word) {
  let index = char.charCodeAt(0) - "a".charCodeAt(0);
  alphabetCount[index]++;
}

console.log(alphabetCount.join(" "));
