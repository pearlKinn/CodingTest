function solution(number) {
    var answer = 0;
    for(var i = 0; i<number.length; i++) {
        for(var j = i+1; j<number.length; j++) {
            for(var l = j+1; l<number.length; l++) {
                if(number[i]+number[j]+number[l]===0){
                    answer++;
                }
            }
        }
    }
    return answer;
}