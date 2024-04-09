"use strict";
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

const answer = input.replace(regExp, (word) =>
  word.startsWith("<") ? word : word.split("").reverse().join("")
);

console.log(answer);
