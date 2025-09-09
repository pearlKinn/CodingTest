function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = getDivisorCount(i);

    if (count > limit) {
      //약수의 개수가 제한수치를 초과하면 무기 공격력을 더한다.
      answer += power;
    } else {
      answer += count; //약수의 개수가 제한수치를 초과하지 않으면 약수의 개수를 더한다.
    }
  }

  return answer;
}

function getDivisorCount(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    //! 제곱근까지만 계산하면 된다.
    if (n % i === 0) {
      count++; // i는 약수

      if (i !== n / i) {
        // i와 n/i가 다르면
        count++; // n/i도 약수이므로 +1
      }
    }
  }

  return count;
}

/* 
  number: 기사단원의 수
  limit: 제한수치
  power: 제한수치를 초과한 기사단원의 무기 공격력
  return: 모든 기사단원의 무기 공격력의 합


  1. 기사단원의 수만큼 for문을 돌면서 약수의 개수를 구한다.
  2. 약수의 개수가 limit보다 작으면 그 값을 더한다.
  3. 약수의 개수가 limit보다 크면 power를 더한다.
  4. 모든 기사단원의 무기 공격력의 합을 반환한다.
*/
