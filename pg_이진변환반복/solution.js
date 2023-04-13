function solution(s) {
    let answer = [0, 0];

    while (s != '1') {
        answer[0] += 1;
        answer[1] += (s.match(/0/g) || []).length;
        s = s.replace('0', '').length.toString(2);
    }
    return answer;
}