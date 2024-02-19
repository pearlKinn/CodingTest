function solution(arr) {
    let answer = arr[0];
    arr.sort((a,b) => a - b);
    
    for(let i=0; i<arr.length - 1; i++) {
        LCM : {
            for(let j=1; j<=arr[i+1]; j++) {
                if((answer * j) % arr[i+1] == 0) {
                    answer = answer * j;
                    break LCM;
                }
            }
        }    
    }

    return answer;
}