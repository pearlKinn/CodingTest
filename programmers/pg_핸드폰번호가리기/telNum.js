function solution(phone_number) {
    var answer = '';
    var hide_num = phone_number.length - 4;
    for (var i = 0; i < phone_number.length; i++) {
        if (i < hide_num) {
            answer = answer + '*'
        }else {
            answer = answer + phone_number[i]
        }
    }
    return answer;
}