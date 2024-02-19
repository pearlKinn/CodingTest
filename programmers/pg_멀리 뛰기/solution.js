function solution(num) {
  const MOD = 1234567;
  let a = 1;
  let b = 2;
  
  if (num === 1) return 1
  if (num === 2) return 2

  for(let i = 3; i<=num; i++) {
      let temp = b;
      b = (a + b) % MOD;
      a = temp;
  }
return b;
}