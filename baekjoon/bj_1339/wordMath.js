// 입력을 받기 위한 준비
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = parseInt(input[0]); // 단어의 개수
const words = input.slice(1, N + 1); // 단어 목록

const contribution = {};

// 각 글자의 기여도를 계산
words.forEach((word) => {
  const length = word.length;
  for (let i = 0; i < length; i++) {
    const char = word[length - 1 - i]; // 오른쪽부터 시작
    const positionValue = Math.pow(10, i); // 자리수 값 (1, 10, 100...)
    if (contribution[char]) {
      contribution[char] += positionValue;
    } else {
      contribution[char] = positionValue;
    }
  }
});

// 기여도에 따라 글자들을 내림차순으로 정렬
const sortedLetters = Object.entries(contribution).sort((a, b) => b[1] - a[1]);

// 글자에 숫자 할당 (가장 높은 기여도부터 9, 8, ...)
const letterToDigit = {};
let currentDigit = 9;
sortedLetters.forEach(([char, _]) => {
  letterToDigit[char] = currentDigit;
  currentDigit--;
});

// 총합 계산
let maxSum = 0;
words.forEach((word) => {
  let numericValue = 0;
  for (let char of word) {
    numericValue = numericValue * 10 + letterToDigit[char];
  }
  maxSum += numericValue;
});

console.log(maxSum);

/* 
민식이는 수학학원에서 단어 수학 문제를 푸는 숙제를 받았다.

단어 수학 문제는 N개의 단어로 이루어져 있으며, 각 단어는 알파벳 대문자로만 이루어져 있다. 이때, 각 알파벳 대문자를 0부터 9까지의 숫자 중 하나로 바꿔서 N개의 수를 합하는 문제이다. 같은 알파벳은 같은 숫자로 바꿔야 하며, 두 개 이상의 알파벳이 같은 숫자로 바뀌어지면 안 된다.

예를 들어, GCF(783) + ACDEB(98654)를 계산한다고 할 때, A = 9, B = 4, C = 8, D = 6, E = 5, F = 3, G = 7로 결정한다면, 두 수의 합은 99437이 되어서 최대가 될 것이다.

N개의 단어가 주어졌을 때, 그 수의 합을 최대로 만드는 프로그램을 작성하시오

입력
첫째 줄에 단어의 개수 N(1 ≤ N ≤ 10)이 주어진다. 둘째 줄부터 N개의 줄에 단어가 한 줄에 하나씩 주어진다. 단어는 알파벳 대문자로만 이루어져있다. 모든 단어에 포함되어 있는 알파벳은 최대 10개이고, 수의 최대 길이는 8이다. 서로 다른 문자는 서로 다른 숫자를 나타낸다.


*/

/**
2. 기여도 계산: 각 단어의 글자들을 오른쪽부터 왼쪽으로 탐색하며, 
각 글자가 해당 자리수(1, 10, 100 등)에 기여하는 값을 계산합니다. 예를 들어, 
'ABC'라는 단어에서 'C'는 1의 자리에 있으므로 기여도는 1, 'B'는 10의 자리에 있으므로 기여도는 10,
'A'는 100의 자리에 있으므로 기여도는 100이 됩니다. 
이 값을 contribution 객체에 저장하여 각 글자의 총 기여도를 누적합니다.

3. 글자 정렬: 계산된 기여도를 바탕으로 글자들을 내림차순으로 정렬합니다. 기여도
가 높은 글자일수록 먼저 높은 숫자를 할당받아야 최대 합을 만들 수 있기 때문입니
다.

4. 숫자 할당: 정렬된 글자들에 대해 높은 순서대로 9, 8, 7, ….. 과 같은 숫자를 할당합니
다. 이를 letter ToDigit 객체에 저장하여 각 글자에 할당된 숫자를 기록합니다.

5. 합계 계산: 각 단어를 숫자로 변환하여 총합을 계산합니다. 변환된 숫자는 글자에 할
당된 숫자를 이용하여 구성됩니다. 예를 들어, 'ABC'가 A=9, B=8, C=7로 할당되
었다면 'ABC'는 987이 됩니다. 모든 단어의 숫자값을 합산하여 최종 결과를 얻습
니다.

6. 출력: 계산된 최대 합계를 콘솔에 출력합니다.
 *
 */
