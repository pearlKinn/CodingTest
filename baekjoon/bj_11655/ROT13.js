"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let inputString = fs.readFileSync(filePath).toString().trim();

const result = inputString
  .split("")
  .map((char) => {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      // 대문자 A-Z
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // 소문자 a-z
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      // 알파벳이 아닌 경우는 그대로 반환
      return char;
    }
  })
  .join("");

console.log(result);
