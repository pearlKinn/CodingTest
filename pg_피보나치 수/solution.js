function solution(n) {
    let answer = 0;
    let F = [0, 1];
    const m = 1234567;

    for(let i=2; i<=n; i++) {
        F[i]  = (F[i-1] % m + F[i-2] % m) //오버플로우가 나지 않도록 % 연산을 사용
    }
    return answer = F[n] % m
}