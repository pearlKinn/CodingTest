const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

const solution = (cards1, cards2, goal) => {
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
    } else if (cards2[0] === goal[i]) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
};

console.log(solution(cards1, cards2, goal));
