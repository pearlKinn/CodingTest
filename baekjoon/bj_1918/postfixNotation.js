"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

const output = [];
const stack = [];

for (const char of input) {
  if (/[A-Z]/.test(char)) {
    // 피연산자(알파벳)일 경우 출력
    output.push(char);
  } else if (char === "(") {
    // 여는 괄호일 경우 스택에 추가
    stack.push(char);
  } else if (char === ")") {
    // 닫는 괄호일 경우 여는 괄호까지 스택에서 팝
    while (stack.length && stack[stack.length - 1] !== "(") {
      output.push(stack.pop());
    }
    stack.pop(); // 여는 괄호 제거
  } else {
    // 연산자인 경우
    while (
      stack.length &&
      precedence[stack[stack.length - 1]] >= precedence[char]
    ) {
      output.push(stack.pop());
    }
    stack.push(char);
  }
}

// 남아 있는 스택의 연산자들을 모두 출력
while (stack.length) {
  output.push(stack.pop());
}

console.log(output.join(""));
