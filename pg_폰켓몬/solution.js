function solution(nums) {
    let answer = [];

    for(let i=0; i<nums.length; i++) {
        if(answer.length < nums.length/2) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        }
    }
    return answer.length;
}