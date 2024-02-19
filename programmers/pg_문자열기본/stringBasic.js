/**
function solution(s) {
    if(s.length === 4 || s.length === 6){
        if (isNaN(s)) {return false}
        else return true;
    }else return false
}
    js에서 숫자에 e가 붙으면 지수로 인식하여 문자인 경우도 숫자로 인식
 => every 메소드를 사용하여 해당 문자열을 일일이 isNaN인지 확인 해야함
 */
function solution(s) {
    if(s.length === 4 || s.length === 6){
       return s.split('').every(c => !isNaN(c)) //모든 요소가 숫자면 true 리턴
    } else return false
}