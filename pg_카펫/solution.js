function solution(brown, yellow) {
    let answer = [0,0];
    let sum = brown + yellow;
    
    for(let height=3; height<=brown/2; height++) {
        if(sum % height === 0) {
            let width = sum / height;
            if((height - 2) * (width - 2) === yellow) {
                answer = [height, width];
            }
        }
    }

    return answer;
}
/*
 * height를 Math.sqrt(sum)부터 역순으로 탐색합니다. 최대값은 Math.floor(Math.sqrt(sum))이므로 이렇게 하면 불필요한 탐색을 줄일 수 있습니다.
 * 가장자리의 개수는 (width + height) * 2 - 4로 계산할 수 있습니다. 따라서 가장자리의 개수와 brown의 값이 일치하는 경우에만 결과를 반환하면 됩니다.
 */
function solution(brown, yellow) {
    let answer = [0,0];
    let sum = brown + yellow;

    for (let height = Math.floor(Math.sqrt(sum)); height >= 3; height--) {
        if (sum % height !== 0) continue;
        const width = sum / height;
        const border = (width + height) * 2 - 4;
        if (border === brown) return [width, height];
    }

    return answer;
}
