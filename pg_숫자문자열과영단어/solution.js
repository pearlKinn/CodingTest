// /zero/g ==> 문자열에 있는 zero를 찾아서 대치하라는 뜻의 정규 표현식
// 'zero' ==> 첫번째로 나온 zero만 대치 -따라서 ''는 안됨
function solution(s) {
    var answer = 0;
    
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    
    answer = Number(s);
    return answer;
}
// 다른 분의 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}