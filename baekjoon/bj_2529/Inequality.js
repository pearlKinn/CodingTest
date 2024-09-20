"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ");
const visit = new Array(N + 1).fill(0);
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

function dfs(L, prev, temp) {
  if (L === N) {
    max = max > temp ? max : temp;
    min = min < temp ? min : temp;
    return;
  }
  if (arr[L] === "<") {
    for (let i = prev + 1; i <= 9; i++) {
      if (visit[i] === 1) continue;
      visit[i] = 1;
      dfs(L + 1, i, temp + i);
      visit[i] = 0;
    }
  } else {
    for (let i = prev - 1; i >= 0; i--) {
      if (visit[i] === 1) continue;
      visit[i] = 1;
      dfs(L + 1, i, temp + i);
      visit[i] = 0;
    }
  }
}

for (let i = 0; i < 10; i++) {
  visit[i] = 1;
  dfs(0, i, `${i}`);
  visit[i] = 0;
}

console.log(`${max}\n${min}`);
