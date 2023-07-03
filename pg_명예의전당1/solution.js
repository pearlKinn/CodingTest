function solution(k, score) {
  let answer = [];
  let rank = [];

  for (let i = 0; i <score.length; i++) {
    if (rank.length < k) {
      rank.push(score[i]);
      rank.sort((a, b) => b - a);
      answer.push(rank[rank.length - 1]);
    } else if (rank[rank.length - 1] < score[i]) {
      rank.pop();
      rank.push(score[i]);
      rank.sort((a, b) => b - a);
      answer.push(rank[rank.length - 1]);
    } else {
      answer.push(rank[rank.length - 1]);
      continue;
    }
  }
  return answer;
}
