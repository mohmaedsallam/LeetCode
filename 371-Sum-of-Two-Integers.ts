/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a: number, b: number): number {
    while (b !== 0) {
        const carry = a & b; // Get the carry bits
        a = a ^ b; // Perform addition without carry
        b = carry << 1; // Left shift the carry bits and add to a
    }
    return a;
}
