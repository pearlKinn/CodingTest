function solution(d, budget) {
    var cnt = 0;
    d = d.sort((a,b) => a - b );
    for(var i = 0; i<d.length; i++) {
        if(budget-d[i] > 0){
            budget -= d[i];
            cnt++
        }else if(budget-d[i]===0) {
            cnt++; break;
        }else break;
    }
    return cnt;
}
/**
 * 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.
 * ==>오름차순으로 정리하는게 관건
 */