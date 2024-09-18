// 450. Delete Node in a BST MEDIUM
// Given a root node reference of a BST and a key, delete the node with the
//  given key in the BST. Return the root node reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:
// 1. Search for a node to remove.
// 2. If the node is found, delete the node.

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) return root

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }
    else {
        if (root.left === null) return root.right
        else if (root.right === null) return root.left

        //finding the smallest node in the right subtree for replacing the to be deleted node
        let curr = root.right
        while (curr.left !== null){
            curr = curr.left
        }
        root.val = curr.val
        root.right = deleteNode(root.right, curr.val)
    }

    return root
};