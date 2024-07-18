"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let inputString = fs.readFileSync(filePath).toString().split("");

const compareArray = [];

for (let i = 0; i < inputString.length; i++) {
  const currentCharCode = inputString[i].charCodeAt(0);

  if (currentCharCode >= 65 && currentCharCode <= 90) {
    const shiftedCode = ((currentCharCode - 65 + 13) % 26) + 65;
    compareArray.push(String.fromCharCode(shiftedCode));
  } else if (currentCharCode >= 97 && currentCharCode <= 122) {
    const shiftedCode = ((currentCharCode - 97 + 13) % 26) + 97;
    compareArray.push(String.fromCharCode(shiftedCode));
  } else {
    compareArray.push(inputString[i]);
  }
}

console.log(compareArray.join(""));
