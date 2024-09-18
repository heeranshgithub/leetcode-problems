// 1448. Count Good Nodes in Binary Tree EASY
// Given a binary tree root, a node X in the tree is named good if in the 
// path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

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
 * @return {number}
 */

var goodNodes = function(root) {
    let goodNum = 0
    var trav = function(node, max) {
        if (node === null) return 
        if (node.val >= max) goodNum++
        max = Math.max(node.val, max)
        trav(node.left, max)
        trav(node.right, max)
    }
    trav(root, root.val)
    return goodNum
};

