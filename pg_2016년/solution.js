function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}// 클래스이기 때문에 toString() 함수를 통해서 문자열로 변환 시키고 0번째부터 글자 3개를 잘라 대문자로 변환해서 리턴해서 원하는 결과를 얻었다.

// 또 다른 방법
var solution=(m,d)=>(new Date(2016,--m,d)+'').toUpperCase().slice(0, 3)
// new Date(year, monthIndex, day) 생성자를 이용한 방법이다.
// 두 번째 매개변수가 Index라서 1을 빼서 넣어주고 있다. 