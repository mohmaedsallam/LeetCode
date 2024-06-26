/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n, sum=0) {
 while(n !== 0){
    n&= (n-1);
    sum++;
 }
 return sum
};