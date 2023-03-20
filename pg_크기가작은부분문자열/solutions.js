function solution(t, p) {
    var answer = 0;
    var str = '';
    for(var i = 0; i<t.length; i++) {
        str = t.substr(i, p.length);
        if(Number(str) <= Number(p) && str.length === p.length) {
            answer++
        }
    }
    return answer;
}