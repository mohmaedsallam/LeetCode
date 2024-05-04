/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b != 0){
        let carry = a & b;  // Get the carry bits
        a = a ^ b;          // Perform addition without carry
        b = carry << 1;     // Left shift the carry bits and add to a
    }
    return a;
}