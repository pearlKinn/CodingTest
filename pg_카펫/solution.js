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