"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n");
const stringLength = parseInt(input[0]);
const NGE = input[1].split(" ").map(Number);
const result = new Array(stringLength).fill(-1);
const stack = [];

for (let i = 0; i < stringLength; i++) {
  // 스택이 비어있지 않고, 현재 원소가 스택의 top에 있는 원소보다 클 때
  while (stack.length !== 0 && NGE[i] > NGE[stack[stack.length - 1]]) {
    // 스택에서 pop을 하고, 그 위치의 결과를 현재 원소로 업데이트
    result[stack.pop()] = NGE[i];
  }
  stack.push(i); // 현재 인덱스를 스택에 push
}

console.log(result.join(" "));
