function solution(arr, divisor) {
    var answer = [];
    var temp = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] % divisor == 0){
            answer.push(arr[i]); //if문에 만족할 때 배열에 푸시
        }
    }
    if (answer.length === 0){ //배열이 비었는지 확인
        answer.push(-1); return answer; 
    } 
    return answer.sort((a,b) => a - b ); //오름차순으로 정렬
}