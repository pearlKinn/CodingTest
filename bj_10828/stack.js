"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const stack = [];
const result = [];

const len = input.shift().split("\n");
let array = len.map((i) => i.split(" "));

for (let i = 1; i < len.length; i++) {
  switch (array[i][0]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(array[i][1]);
      break;
  }
}

console.log(result.join("\n"));
