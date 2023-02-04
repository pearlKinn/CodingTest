function solution(x, n) {
    var answer = [];

    for (var i = 0; i < n; i++) {
        if(n == 1) {
            answer[0] = x;
            return answer;
        } else {
            answer[0] = x;
            answer[i] = answer[i-1] + x;
        }
    }
    return answer;
}
