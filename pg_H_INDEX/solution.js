function solution(citations) {
    let answer = 0;
    const MAX = Math.max(...citations);

    for(let i=MAX; i>=0; i--) {
        const filterCitations = citations.filter(num => num >= i);
        if(filterCitations.length >= i) {
            answer = i;
            break;
        }
    }

    return answer;
}
