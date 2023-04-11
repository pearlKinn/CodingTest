function solution(s){
    let fCnt = 0;
    let eCnt = 0;
    if(s[0]===')') return false;
    for(let i=0; i<s.length; i++) {
        if(s[i]==='(') fCnt++
        else {
            eCnt++
        }
        if(fCnt<eCnt) return false;
    }
    
    return fCnt == eCnt ? true : false
}