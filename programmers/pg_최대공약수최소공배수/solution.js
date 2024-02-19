function solution(n, m) {
    var answer = [];
    var i=0;
    if(m >= n) {
        for ( i = m; i > 0; i--) {
            if (n % i == 0 && m % i == 0) {
                answer.push(i); break;
            }
        }
    }else {
        for ( i = n; i > 0; i--) {
            if (n % i == 0 && m % i == 0) {
                answer.push(i); break;
            }
        }
    }
    answer.push(n*m/answer);
    return answer;
}
//유클리드 호제법 정리
// 최대공약수 GCD 최소공배수 LCM

function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}