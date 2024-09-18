// 437. Path Sum III MEDIUM
// Given the root of a binary tree and an integer targetSum, return the 
// number of paths where the sum of the values along the path equals targetSum.
// The path does not need to start or end at the root or a leaf, but it must go 
// downwards (i.e., traveling only from parent nodes to child nodes).

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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (root === null) return 0
    let paths = 0
    const helper = (node, targetSum) => {
        if (node === null) return
        targetSum -= node.val
        if (targetSum === 0) paths++
        helper(node.left, targetSum)
        helper(node.right, targetSum)
    }

    const traverse = (node, targetSum) => {
        if (node === null) return 
        helper(node, targetSum)
        traverse(node.left, targetSum)
        traverse(node.right, targetSum)
    }

    traverse(root, targetSum)
    return paths
};