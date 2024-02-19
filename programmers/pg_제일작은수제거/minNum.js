function solution(arr) {
    
    arr.splice(arr.indexOf(Math.min(...arr)),1); //배열의 요소 중 가장 작은 값 하나 제거
    arr.length <= 1 ? answer = [-1] : answer = arr
    
    return answer
}