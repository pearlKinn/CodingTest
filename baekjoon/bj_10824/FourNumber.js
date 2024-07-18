"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let NumArray = fs.readFileSync(filePath).toString().split(" ");
let firstNum = +(NumArray[0] + NumArray[1]);
let secondNum = +(NumArray[2] + NumArray[3]);
console.log(firstNum + secondNum);
