function solution(k, m, score) {
  const boxCount = Math.floor(score.length / m); // 상자의 개수
  score.sort((a, b) => b - a);

  let maxProfit = 0; // 최대 이익 초기값
  for (let i = 0; i < boxCount; i++) {
    const boxScore = score.slice(i * m, (i + 1) * m); // 상자에 들어갈 사과 점수
    const minScore = Math.min(...boxScore); // 상자에 들어간 사과의 최저 점수
    const boxProfit = minScore * m; // 상자의 이익

    maxProfit += boxProfit; // 총 이익에 상자의 이익을 더함
  }

  return maxProfit;
}