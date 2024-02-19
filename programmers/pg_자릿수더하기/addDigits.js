function addDigits(n)
{
    var answer = 0;
    var arr =  (n + '').split('');
    const stringToNum = arr.map((i) => Number(i));
    
    for (var i = 0; i < stringToNum.length; i++) {
        answer += stringToNum[i];
    }
    return answer;
}