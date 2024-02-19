function solution(s) {
    let answer = 0;
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) {
        // 왼쪽으로 회전
        const rotated = s.slice(i) + s.slice(0, i);
        stack.length = 0;

        // 회전된 문자열이 올바른 괄호 문자열인지 확인
        let isValid = true;
        for (let j = 0; j < rotated.length; j++) {
            const c = rotated[j];
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                const top = stack.pop();
                if (top !== pairs[c]) {
                    isValid = false;
                    break;
                }
            }
        }
        if (stack.length > 0) {
            isValid = false;
        }

        if (isValid) {
            answer++;
        }
    }
    return answer;
}
// 괄호 문자열의 길이가 N일 때 
// N/2개 이상의 괄호가 열린 상태에서 시작하면 
// 반드시 올바른 괄호 문자열이 됩니다.