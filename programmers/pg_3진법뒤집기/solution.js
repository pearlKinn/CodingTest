function solution(n) {
    let answer = n.toString(3).split("").reverse().join(""); //어떤 수를.toString(몇진수로 변환하고 싶은지)
    return parseInt(answer, 3); //parseInt('변환시키고자하는 문자열', 해당 수의 진수)
}