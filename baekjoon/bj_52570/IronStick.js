"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
let LIST = input.split("");
let store = [];
let check = false; // 이전 문자가 '('인지 확인하는 플래그
let result = 0;

for (let i = 0; i < LIST.length; i++) {
  if (LIST[i] === "(") {
    store.push(1); // 스택에 1을 추가
    check = true; // 이전 문자가 '('로 설정
  } else if (LIST[i] === ")") {
    if (check === true) {
      store.pop(); // 스택에서 제거
      check = false; // 이전 문자가 ')'로 변경
      result += store.length; // 스택의 길이만큼 결과값에 추가 (레이저로 인한 조각 증가)
    } else {
      store.pop(); // 스택에서 제거
      result += 1; // 쇠막대기의 끝이므로 결과값에 1 추가
    }
  }
}

console.log(result);
