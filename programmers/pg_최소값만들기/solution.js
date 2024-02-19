//각 배열의 원소를 곱해서 더했을 때 최솟값을 만들기 위해서는 (가장 작은 수 * 가장 큰 수)를 곱한 수를 더하면 된다.
function solution(A,B){
    let answer = 0;
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    return A.reduce((sum, curr, i) => sum + curr * B[i], 0);
}