"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const n = Number(input[0]);
const list = input.slice(1);

let hashMap = new Map();
let cnt = 0;
let result = 0;
let current = 9;

// 각 알파벳의 가중치 계산
for (let i = 0; i < n; i++) {
  for (let j = 0; j < list[i].length; j++) {
    cnt = Math.pow(10, list[i].length - (j + 1));
    hashMap.set(list[i][j], (hashMap.get(list[i][j]) || 0) + cnt);
  }
}

// 가중치에 따라 알파벳 정렬
const sortMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));

// 숫자 할당 및 결과 계산
for (let [_, alphabetValue] of sortMap) {
  result += current * alphabetValue;
  --current;
}

// 최종 결과 출력
console.log(result);

/* 
민식이는 수학학원에서 단어 수학 문제를 푸는 숙제를 받았다.

단어 수학 문제는 N개의 단어로 이루어져 있으며, 각 단어는 알파벳 대문자로만 이루어져 있다. 이때, 각 알파벳 대문자를 0부터 9까지의 숫자 중 하나로 바꿔서 N개의 수를 합하는 문제이다. 같은 알파벳은 같은 숫자로 바꿔야 하며, 두 개 이상의 알파벳이 같은 숫자로 바뀌어지면 안 된다.

예를 들어, GCF(783) + ACDEB(98654)를 계산한다고 할 때, A = 9, B = 4, C = 8, D = 6, E = 5, F = 3, G = 7로 결정한다면, 두 수의 합은 99437이 되어서 최대가 될 것이다.

N개의 단어가 주어졌을 때, 그 수의 합을 최대로 만드는 프로그램을 작성하시오

입력
첫째 줄에 단어의 개수 N(1 ≤ N ≤ 10)이 주어진다. 둘째 줄부터 N개의 줄에 단어가 한 줄에 하나씩 주어진다. 단어는 알파벳 대문자로만 이루어져있다. 모든 단어에 포함되어 있는 알파벳은 최대 10개이고, 수의 최대 길이는 8이다. 서로 다른 문자는 서로 다른 숫자를 나타낸다.


*/
