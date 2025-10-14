const solution = (N, stages) => {
  const answer = [];

  for (let i = 1; i <= N; i++) {
    const reach = stages.filter((stage) => stage >= i).length;
    const fail = stages.filter((stage) => stage === i).length;
    answer.push({ stage: i, failRate: reach === 0 ? 0 : fail / reach });
  }
  return answer
    .sort((a, b) => b.failRate - a.failRate)
    .map((item) => item.stage);
};

/* 
실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수

전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
*/
