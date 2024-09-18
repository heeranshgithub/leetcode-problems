// 199. Binary Tree Right Side View MEDIUM
// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

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
 * @return {number[]}
 */

var rightSideView = function (root) {
    if(root === null) return []
    const res = []
    const levels = []
    const queue = [[root, 0]]
    while (queue.length > 0) {
        const currPair = queue.shift()
        const currNode = currPair[0]
        const currLevel = currPair[1]
        if (!levels.includes(currLevel)) res.push(currNode.val)
        levels.push(currLevel)
        if (currNode.right !== null) queue.push([currNode.right, currLevel + 1])
        if (currNode.left !== null) queue.push([currNode.left, currLevel + 1])
    }

    return res
};