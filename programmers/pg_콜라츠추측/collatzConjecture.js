function solution(num) {
    var cnt = 0;

    while(num != 1){
        if (num % 2 == 0) {
            num = num  / 2;
            cnt++;
            if(cnt == 500) return -1;
        }else if (num % 2 != 0) {
            num = num * 3 + 1;
            cnt++;
            if(cnt == 500) return -1;
        }
    }
    return cnt;
}