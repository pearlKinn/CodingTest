"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const arr = input.shift().split("\n"); // 입력받은 값 배열로 만들기
const result = [];

for (let i = 1; i <= arr[0]; i++) {
  let parenthesisArray = []; // 괄호 배열을 각각의 문자열마다 초기화

  const parenthesis = arr[i].split("");
  let isVPS = true; // VPS인지 아닌지 판단하는 변수
  for (let j = 0; j < parenthesis.length; j++) {
    if (parenthesis[j] === "(") {
      parenthesisArray.push(parenthesis[j]);
    } else if (parenthesis[j] === ")") {
      if (parenthesisArray.length === 0) {
        isVPS = false;
        break;
      }
      parenthesisArray.pop();
    }
  }
  if (parenthesisArray.length !== 0) isVPS = false; // 모든 괄호를 확인한 후 열린 괄호가 남아있다면 VPS가 아님
  result.push(isVPS ? "YES" : "NO");
}
console.log(result.join("\n"));
