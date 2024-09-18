// 700. Search in a Binary Search Tree EASY
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
// If such a node does not exist, return null.

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let curr = root
    while(curr.val != val) {
        if (curr.val > val) {
            if (curr.left == null) return null
            else curr = curr.left
        }
        else { //curr.val < val
            if (curr.right == null) return null
            else curr = curr.right
        }
    }

    return curr
};