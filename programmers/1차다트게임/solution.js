const solution = (dartResult) => {
  // 각 다트 기회별 최종 점수를 저장할 배열 (총 3번)
  const scores = [];

  // 정규표현식으로 각 점수 구역을 파싱 (점수, 영역, [옵션])
  // (10|[0-9]): 10이거나 0~9까지의 숫자 (점수)
  // ([SDT]): S, D, T 중 하나 (영역)
  // ([*#]?): *, # 중 하나 또는 없음 (옵션)
  // g 플래그로 문자열 내 모든 일치하는 패턴을 찾음
  const regex = /(10|[0-9])([SDT])([*#]?)/g;

  // dartResult 문자열에서 정규표현식에 일치하는 모든 부분들을 찾아 배열로 반환
  // 예: "1S2D*3T" -> ["1S", "2D*", "3T"] 처럼 각 다트 기회 정보를 뽑아냄
  // matches는 각 매치별로 [전체매치문자열, 점수, 영역, 옵션] 형태의 배열을 반환함
  const matches = [...dartResult.matchAll(regex)];
  // console.log("정규식 매치 결과:", matches); // 디버깅용

  // 3번의 다트 기회를 하나씩 처리
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const scoreStr = match[1]; // "1", "10", "2", "3" 등 점수 문자열
    const bonus = match[2]; // "S", "D", "T" 보너스
    const option = match[3]; // "*", "#", 또는 "" (빈 문자열) 옵션

    let currentScore = parseInt(scoreStr); // 점수를 정수로 변환

    // 1. 영역 보너스 계산 (S, D, T)
    if (bonus === "D") {
      currentScore = Math.pow(currentScore, 2); // 점수^2
    } else if (bonus === "T") {
      currentScore = Math.pow(currentScore, 3); // 점수^3
    }
    // 'S'는 1제곱이라 currentScore 변화 없음

    // 2. 옵션 처리
    if (option === "*") {
      // 스타상 처리
      currentScore *= 2; // 현재 점수 2배

      // 이전 점수가 있다면 그 점수도 2배 (i > 0은 두 번째, 세 번째 기회인 경우)
      if (i > 0) {
        scores[i - 1] *= 2;
      }
    } else if (option === "#") {
      // 아차상 처리
      currentScore *= -1; // 현재 점수 마이너스
    }

    // 계산된 현재 점수를 scores 배열에 추가
    scores.push(currentScore);
  }

  // 최종적으로 3번의 점수를 모두 더해서 반환
  return scores.reduce((acc, cur) => acc + cur, 0);
};
