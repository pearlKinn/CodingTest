function solution(n,a,b) {
    let answer = 1;
    let A = a;
    let B = b;

    for(let i=0; i<n/2; i++) {
        if(A<B) {
            if(Math.abs(A-B) === 1 && B%2 == 0) break;
        } else {
            if(Math.abs(A-B) === 1 && A%2 == 0) break;
        }
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        answer++;
    }

    return answer;
}