/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let arraySum = 0;
    let leftSum = 0; 
    nums.forEach(e => arraySum+= e);
    for(let i = 0; i < nums.length; i++){
        if(leftSum === (arraySum - leftSum - nums[i])){
            return i
        }
        leftSum+=nums[i];
    }
    return -1
};