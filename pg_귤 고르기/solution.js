function solution(k, tangerine) {
    let answer = 0;
    let num = [];
    let sum = 0;
    const countMap = {};
    
    // tangerine 배열에서 각 숫자의 출현 횟수를 저장하는 countMap 객체를 생성
    for (let i = 0; i < tangerine.length; i++) {
        const num = tangerine[i];
        countMap[num] = (countMap[num] || 0) + 1;
    }
    //for-in 루프를 이용해 countMap에서 각 숫자의 출현 횟수를 num 배열에 추가
    for (const key in countMap) {
        num.push(countMap[key]);
    }
    num.sort((a, b) => b - a);
    for (let i = 0; i < num.length; i++) {
        answer++;
        sum += num[i];
        if (sum >= k) {
            break;
        }
    }
    return answer;
}