function solution(k, score) {
  let answer = [];
  let rank = [];

  for (let i = 0; i <score.length; i++) {
    if (rank.length < k) {
      rank.push(score[i]);
    } else if (rank[rank.length - 1] < score[i]) {
      rank.pop();
      rank.push(score[i]);
    } else {
      answer.push(rank[rank.length - 1]);
      continue;
    }
    rank.sort((a, b) => b - a);
    answer.push(rank[rank.length - 1]);
  }
  return answer;
}
