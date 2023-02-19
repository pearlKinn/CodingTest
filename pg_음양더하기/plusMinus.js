function solution(absolutes, signs) {
    var result = 0;
    for (var i = 0; i < absolutes.length; i++){
        if (signs[i] == false){
            result = result - absolutes[i]
        }else {
            result += absolutes[i]
        }
    }
    return result;
}