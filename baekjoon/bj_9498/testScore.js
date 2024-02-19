const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin")
const score = inputData

if (score >= 90 && score <= 100) {
  console.log('A')
} else if (score >= 80 && score <= 89) {
  console.log('B')
} else if (score >= 70 && score <= 79) {
  console.log('C')
} else if (score >= 60 && score <= 69) {
  console.log('D')
} else {
  console.log('F')
}
//스위치문으로 작성
switch (true) {
  case score >= 90 && score <= 100:
    console.log('A');
    break;
  case score >= 80 && score <= 89:
    console.log('B');
    break;
  case score >= 70 && score <= 79:
    console.log('C');
    break;
  case score >= 60 && score <= 69:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}