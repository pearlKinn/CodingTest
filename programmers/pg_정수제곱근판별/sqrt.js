function squareroot(n){
    var num = 0;
    if(Math.sqrt(n) > 0 && Number.isInteger(Math.sqrt(n))) {
        num = Math.sqrt(n) + 1;
        return Math.pow(num, 2);
    }else return -1;
}