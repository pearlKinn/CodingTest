function solution(s) {
    const answer = [];
    const tmp = [];
    for(let i = 0; i<s.length; i++) {
            if(!tmp.includes(s[i])) {
               answer.push(-1);
            }else if(tmp.includes(s[i])) {
                answer.push(i - tmp.lastIndexOf(s[i]));
            }
            tmp.push(s[i]);
    }
    return answer;
}
// lastIndexOf => 중복되는 요소중 마지막 덱스 값을 반환