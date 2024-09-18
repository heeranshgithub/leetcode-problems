// 112. Path Sum EASY
// Given the root of a binary tree and an integer targetSum, 
// return true if the tree has a root-to-leaf path such that adding 
// up all the values along the path equals targetSum.
// A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    var trav = function(node, targetSum, sum) {
        if (node === null) return false
        sum += node.val
        if (node.left === null && node.right === null) {
            if (sum === targetSum) return true
        }
        return trav(node.left, targetSum, sum) || trav(node.right, targetSum, sum)
    }
    return trav(root, targetSum, 0)
};