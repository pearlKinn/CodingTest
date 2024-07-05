"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let word = fs.readFileSync(filePath).toString().split("");
let alphabetCount = new Array(26).fill(-1);

for (let i = 0; i < word.length; i++) {
  let index = word[i].charCodeAt(0) - "a".charCodeAt(0);

  if (alphabetCount[index] === -1) {
    alphabetCount[index] = i;
  }
}

console.log(alphabetCount.join(" "));
