function solution(s) {
    var answer = '';
    if (s.length % 2 == 0) {
        return answer = s[s.length / 2 - 1] + s[s.length / 2]
    }else {
        return answer = s[Math.floor(s.length/2)]; //반내림
    }
}

//다른사람 풀이

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
//substr(start, length) 