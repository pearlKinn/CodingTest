function solution(price, money, count) {
    var sum = 0;
    for (var i = 1; i<=count; i++) {
        sum += price*i
    }
    return sum > money? sum - money : 0;
}
//다른 사람 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}