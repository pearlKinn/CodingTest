"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n");
const operandCount = input[0];
const postfixNotation = input[1].split("");

function evaluatePostfixNotation(postfixNotation, values) {
  let stack = [];

  for (let char of postfixNotation) {
    if (char >= "A" && char <= "Z") {
      // 피연산자인 경우
      let index = char.charCodeAt(0) - "A".charCodeAt(0); // 인덱스 구하기
      stack.push(values[index]);
    } else {
      // 연산자인 경우
      let operand2 = stack.pop();
      let operand1 = stack.pop();

      if (char === "+") {
        stack.push(operand1 + operand2);
      } else if (char === "-") {
        stack.push(operand1 - operand2);
      } else if (char === "*") {
        stack.push(operand1 * operand2);
      } else if (char === "/") {
        stack.push(operand1 / operand2);
      }
    }
  }

  return stack.pop();
}

// 입력

const values = [];

for (let i = 0; i < operandCount; i++) {
  values.push(parseInt(input[i + 2], 10));
}

// 후위 표기식 평가
const result = evaluatePostfixNotation(postfixNotation, values);
// 결과 출력 (소수점 둘째 자리까지)
console.log(result.toFixed(2));
