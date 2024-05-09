/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const result = [];
    backtrack(result, \\, 0, 0, n);
    return result;
};

function backtrack(result, currentString, open, close, max) {
    // Base case: When the length of the current string is equal to 2 * max,
    // we have a valid combination, so we add it to the result array.
    if (currentString.length === max * 2) {
        result.push(currentString);
        return;
    }

    // If the number of open parentheses is less than the maximum allowed,
    // we can add an opening parenthesis to the current string.
    if (open < max)
        backtrack(result, currentString + \(\, open + 1, close, max);

    // If the number of closed parentheses is less than the number of open parentheses,
    // we can add a closing parenthesis to the current string.
    if (close < open)
        backtrack(result, currentString + \)\, open, close + 1, max);
}