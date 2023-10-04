const solution = (elements) => {
  const sumSet = new Set(); // 연속 부분 수열의 합을 저장

  const len = elements.length;

  for (let i = 1; i <= len; i++) { // i는 연속 부분 수열의 길이
    let sum = 0;
    
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        // 최초 한 번의 창문에 대해서만 직접 합을 구하기
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      } else {
        // 이후 창문들에 대해서는 이전에 구한 합을 활용하기
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % len];
      }
      sumSet.add(sum);
    }
  }

  // 원형 수열의 연속 부분 수열 합으로 만들 수 있는 수의 개수를 return
  return sumSet.size;
};
