function solution(n) {
    let answer = 0;
    let arr = new Array(n+1).fill(true);

    for(let i = 2; i <= n; i++) {
        for(let j = i * 2; j <= n; j += i) {//2를 제외한 2의 배수는 제외
                arr[j] = false;
        }
    }
    for(let i = 2; i <= n; i++) {
        if(arr[i] === true) answer++;
    }
    return answer;
}