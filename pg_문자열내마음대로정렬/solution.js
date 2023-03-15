function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
//localeCompare => 인수로 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수, 그 반대의 경우는 양수, 동등한 경우에는 0을 반환한다.