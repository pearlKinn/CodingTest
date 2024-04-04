"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const inputArr = input.shift().split("\n"); // 입력받은 값 배열로 만들기
const initialStr = inputArr[0];
const queue = [];
const resultArr = [];

for (let i = 1; i <= initialStr; i++) {
  const command = inputArr[i].split(" ")[0];

  switch (command) {
    case "push":
      const charToAdd = inputArr[i].split(" ")[1];
      queue.push(charToAdd);
      break;
    case "size":
      resultArr.push(queue.length);
      break;

    case "pop":
      queue.length === 0 ? resultArr.push(-1) : resultArr.push(queue.shift());
      break;
    case "empty":
      queue.length === 0 ? resultArr.push(1) : resultArr.push(0);
      break;
    case "front":
      queue.length === 0 ? resultArr.push(-1) : resultArr.push(queue[0]);
      break;
    case "back":
      queue.length === 0
        ? resultArr.push(-1)
        : resultArr.push(queue[queue.length - 1]);
      break;
  }
}
console.log(resultArr.join("\n"));
