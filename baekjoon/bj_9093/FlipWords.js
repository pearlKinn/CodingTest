"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const arr = input.shift().split("\n"); // 입력받은 값 배열로 만들기

for (let i = 0; i < arr[0]; i++) {
  const flipWords = arr[i + 1].split(" "); // 문장 배열로 만들기
  for (let j = 0; j < flipWords.length; j++) {
    flipWords[j] = flipWords[j].split("").reverse().join(""); // 문장의 단어를 배열로 분리한다음 reverse 메소드를 사용하여 뒤집어준다음 join 메소드로 다시 하나의 배열로 만들어줌
  }

  console.log(flipWords.join(" ")); // 배열로 만들어져 있던 문장으로 하나의 문자열로 만들어줌
}
