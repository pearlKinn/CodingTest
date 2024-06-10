"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n");
const NGF = input[1].split(" ").map(Number);

function calculateNGF(arr) {
  // 각 원소의 등장 횟수 계산
  const freq = {};
  arr.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
  });

  // 결과를 저장할 배열
  const result = new Array(arr.length).fill(-1);

  const stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentFreq = freq[arr[i]];

    while (
      stack.length > 0 &&
      freq[arr[stack[stack.length - 1]]] <= currentFreq
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result.toString().split(",").join(" ");
}

console.log(calculateNGF(NGF));
