function harshadNum(x) {
    var sum = 0;
    var arr =  (n + '').split('');
    const stringToNum = arr.map((i) => Number(i));
    
    for (var i = 0; i < stringToNum.length; i++) {
        sum += stringToNum[i];
    }
    if (x % sum == 0) {
        return true;
    }else return false;
}