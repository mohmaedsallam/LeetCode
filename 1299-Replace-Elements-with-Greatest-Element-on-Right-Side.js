/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr,max= -1) {
    for (let i = arr.length - 1; i>=0; i--){
        const num = arr[i];
        arr[i] = max;

        max = Math.max(max,num);
    }
    return arr
};
