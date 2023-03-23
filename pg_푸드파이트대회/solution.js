function solution(food) {
    let answer = "";
    for (let i = 1; i < food.length; i++) {
      answer += String(i).repeat(Math.floor(food[i] / 2));
    }
    return answer + "0" + [...answer].reverse().join("");
  }
////////////////////////////////////////////////////////////////////////
function solution(food) {
    return food.reverse().reduce((acc, cur, idx) => {
        const calorie = (food.length - idx - 1).toString();
        
        const repeatedFood = calorie.repeat(parseInt(cur / 2));
        
        return repeatedFood + acc + repeatedFood;
    }, '0');
}