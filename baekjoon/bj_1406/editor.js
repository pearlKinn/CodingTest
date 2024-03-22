"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const inputArr = input.shift().split("\n"); // 입력받은 값 배열로 만들기
const initialStr = inputArr[0];
const leftStack = initialStr.split(""); // 초기 문자열을 왼쪽 스택에 삽입
const rightStack = [];

for (let i = 1; i < inputArr.length; i++) {
  console.log("leftStack", leftStack);
  console.log("rightStack", rightStack);
  const command = inputArr[i][0]; // 명령어(L, D, B, P)를 추출
  switch (command) {
    case "L":
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
      break;
    case "D":
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
      break;
    case "B":
      if (leftStack.length > 0) {
        leftStack.pop();
      }
      break;
    case "P":
      const charToAdd = inputArr[i].split(" ")[1];
      leftStack.push(charToAdd);
      break;
  }
}

// 최종 문자열 생성
const finalStr = leftStack.join("") + rightStack.reverse().join("");
console.log(finalStr);
