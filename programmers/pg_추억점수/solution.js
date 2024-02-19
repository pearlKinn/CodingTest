function solution(name, yearning, photo) {
    let answer = [];

    for(let i=0; i<photo.length; i++) {
        let sum = 0;
        for(let j=0; j<photo[i].length; j++) {
            const idx = name.indexOf(photo[i][j]);
            if(idx !== -1) {
                sum += yearning[idx]
            }
        }
        answer.push(sum);
    }
    return answer;
}
