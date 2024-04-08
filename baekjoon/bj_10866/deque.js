"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const inputArr = input.shift().split("\n"); // 입력받은 값 배열로 만들기
const inputArrLength = inputArr[0];
const deque = [];
const resultArr = [];

for (let i = 1; i <= inputArrLength; i++) {
  const command = inputArr[i].split(" ")[0];

  switch (command) {
    case "push_front":
      const frontToAdd = inputArr[i].split(" ")[1];
      deque.unshift(frontToAdd);
      break;
    case "push_back":
      const backToAdd = inputArr[i].split(" ")[1];
      deque.push(backToAdd);
      break;

    case "pop_front":
      deque.length === 0 ? resultArr.push(-1) : resultArr.push(deque.shift());
      break;
    case "pop_back":
      deque.length === 0 ? resultArr.push(-1) : resultArr.push(deque.pop());
      break;
    case "size":
      resultArr.push(deque.length);
      break;
    case "empty":
      deque.length === 0 ? resultArr.push(1) : resultArr.push(0);
      break;
    case "front":
      deque.length === 0 ? resultArr.push(-1) : resultArr.push(deque[0]);
      break;
    case "back":
      deque.length === 0
        ? resultArr.push(-1)
        : resultArr.push(deque[deque.length - 1]);
      break;
  }
}
console.log(resultArr.join("\n"));
