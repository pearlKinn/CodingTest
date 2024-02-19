function sumDivisor(n) {
    var sum = 0;

    for (var i = 0; i <= n; i++) {
        if (n % i == 0){
            sum += i 
        }
    }
    return sum;
}

//결과 확인용 코드
console.log(sumDivisor(12));
