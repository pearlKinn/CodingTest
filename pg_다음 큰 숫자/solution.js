function solution(n) {
    let answer = 0;
    let cnt = n.toString(2).match(/1/g).length;

    for(let i=n+1; i.toString(2).match(/1/g).length != cnt; i++) {
        answer = i+1;
    }
    if(cnt===(n+1).toString(2).match(/1/g).length) answer = n+1;
    return answer;
}