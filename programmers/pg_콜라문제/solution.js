function solution(a, b, n) {
    var answer = 0;

    while(n >= a) {
        n = Math.floor(n/a)*b + n%a
        answer += Math.floor(n/a)*b
    }
    return answer;
}