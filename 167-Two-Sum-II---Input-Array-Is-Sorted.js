/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let [left,right] = [0,numbers.length-1];
    while(left < right){
        const sum = numbers[left] + numbers[right];
        let isTarget = sum === target;
        if(isTarget) return [left+1, right+1];
        const isTargetGreater = sum < target;
        if(isTargetGreater) left++;
        const isTargetLess = target < sum;
        if(isTargetLess) right--;
    }
    return [-1,-1]
};

/*

var twoSum = function(numbers, target) {
  const map = new Map();
  
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    
    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1];
    }
    
    map.set(numbers[i], i);
  }
  
  return [-1, -1];
};

 */