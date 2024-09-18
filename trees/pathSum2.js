// 113. Path Sum II MEDIUM
// Given the root of a binary tree and an integer targetSum, 
// return all root-to-leaf paths where the sum of the node values 
// in the path equals targetSum. Each path should be returned as a 
// list of the node values, not node references.
// A root-to-leaf path is a path starting from the root and 
// ending at any leaf node. A leaf is a node with no children.

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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const res = []
    var trav = function(node, targetSum, sum, list) {
        if (node === null) return 
        sum += node.val
        list.push(node.val)
        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                res.push([...list])
            } 
        }
        else {
            trav(node.left, targetSum, sum, list)
            trav(node.right, targetSum, sum, list)
        }
        list.pop()
    }

    trav(root, targetSum, 0, [])
    return res
};