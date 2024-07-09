"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let inputStrings = fs.readFileSync(filePath).toString().split("\n");

for (let i = 0; i < inputStrings.length; i++) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let digitCount = 0;
  let spaceCount = 0;

  let splitWords = inputStrings[i].split("");
  for (let char of splitWords) {
    if (char >= "a" && char <= "z") {
      lowerCaseCount++;
    } else if (char >= "A" && char <= "Z") {
      upperCaseCount++;
    } else if (char >= "0" && char <= "9") {
      digitCount++;
    } else if (char === " ") {
      spaceCount++;
    }
  }

  console.log(
    `${lowerCaseCount} ${upperCaseCount} ${digitCount} ${spaceCount}`
  );
}
