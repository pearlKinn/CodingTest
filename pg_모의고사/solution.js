function solution(answers) {
    var answer = [];
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];
    
    for (let i=0; i<answers.length; i++) {
        if (arr1[i % 5] === answers[i]) result[0]++;
        if (arr2[i % 8] === answers[i]) result[1]++;
        if (arr3[i % 10] === answers[i]) result[2]++;
    }
    const maxValue = Math.max(...result);

    for (let i = 0; i < 3; i++) {
      if (maxValue === result[i]) {
        answer.push(i+1);
        }
    }
    return answer;
}