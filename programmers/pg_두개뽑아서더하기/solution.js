function solution(numbers) {
    var arr = [];
    for(var i = 0; i<numbers.length; i++) {
        for(var j = i+1; j<numbers.length; j++) {
            arr.push(numbers[i]+numbers[j]);
        }
    }
    var deduplication = Array.from(new Set(arr));
    return deduplication.sort((a, b) => a - b)
}