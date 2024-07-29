"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const inputArray = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const totalHeight = inputArray.reduce((acc, cur) => acc + cur, 0);
const targetHeight = 100;

for (let i = 0; i < inputArray.length - 1; i++) {
  for (let j = i + 1; j < inputArray.length; j++) {
    if (totalHeight - inputArray[i] - inputArray[j] === targetHeight) {
      const result = inputArray.filter(
        (_, index) => index !== i && index !== j
      );
      result.sort((a, b) => a - b);
      console.log(result.join("\n"));
      return;
    }
  }
}
