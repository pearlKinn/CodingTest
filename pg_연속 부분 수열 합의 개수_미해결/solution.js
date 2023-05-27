function solution(elements) {
  let answer = 0;
  const n = elements.length;
  const sums = new Set();
  
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let length = 1; length <= n; length++) {
      for (let i = start; i < start + length; i++) {
        sum += elements[i % n];
      }
      sums.add(sum);
    }
  }
  return answer;
}

// git push --set-upstream origin main