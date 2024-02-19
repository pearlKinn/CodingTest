function solution(people, limit) {
    let answer = 0;
    let l = 0;
    let r = people.length - 1

    people.sort((a,b) => b - a);
    
    while(l<r) {
        let sum = people[l] + people[r]
        if(sum>limit) {
            l++
        } else {
            l++
            r--
        }
        answer++
    }
    if(l == r) answer++
    return answer;
}