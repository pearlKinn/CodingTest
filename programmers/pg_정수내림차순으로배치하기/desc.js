function desc(n) {
    return Number(n.toString.split("").sort((a,b) => b - a ).join(""));
  }
  //sort((a,b) => b - a ) 내림차순으로 정리!
  //sort((a,b) => a - b ) 오름차순
  //join <==> split