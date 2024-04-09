"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
const [n, k] = input.shift().split(" ").map(Number); // 문자열을 숫자로 변환
const initialArr = Array.from({ length: n }, (v, i) => i + 1);
const josephusPermutation = [];
const josephusNum = k;

let index = 0; // 현재 위치를 가리키는 인덱스

while (initialArr.length > 0) {
  index = (index + josephusNum - 1) % initialArr.length; // k번째 사람을 찾기 위해 인덱스 조정 - % initialArr.length는 인덱스가 배열의 범위를 벗어나는 것을 방지하고, 순환 구조 생성
  josephusPermutation.push(initialArr.splice(index, 1)[0]); // k번째 사람을 배열에서 제거하고 결과 배열에 추가
}

console.log(`<${josephusPermutation.join(", ")}>`);
