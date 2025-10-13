"use strict";
function solution(n) {
  var answer = n
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reduce((acc, curr) => acc + curr, 0);
  return answer;
}
