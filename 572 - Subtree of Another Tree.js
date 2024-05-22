/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Helper function to determine if two binary trees are identical.
 * @param {TreeNode} s - The root node of the first tree.
 * @param {TreeNode} t - The root node of the second tree.
 * @return {boolean} - True if the trees are identical, false otherwise.
 */
function isSameTree(s, t) {
    if (s === null && t === null) {
        return true;
    }
    if (s === null || t === null) {
        return false;
    }
    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

/**
 * Main function to determine if subRoot is a subtree of root.
 * @param {TreeNode} root - The root node of the main tree.
 * @param {TreeNode} subRoot - The root node of the subtree to check.
 * @return {boolean} - True if subRoot is a subtree of root, false otherwise.
 */
var isSubtree = function(root, subRoot) {
    if (root === null) {
        return false;
    }
    if (isSameTree(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
