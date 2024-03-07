"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const inputArr = input.shift().split("\n"); // 입력받은 값 배열로 만들기

let stack = [];
let result = "";
let count = 1;
let isPossible = true;

for (let i = 1; i <= inputArr[0]; i++) {
  while (count <= inputArr[i]) {
    stack.push(count);
    count += 1;
    result += "+\n";
  }

  if (stack[stack.length - 1] == inputArr[i]) {
    stack.pop();
    result += "-\n";
  } else {
    isPossible = false;
    break;
  }
}

if (isPossible) {
  console.log(result.trim());
} else {
  console.log("NO");
}
