// 1372. Longest ZigZag Path in a Binary Tree MEDIUM
// You are given the root of a binary tree.
// A ZigZag path for a binary tree is defined as follow:
// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node;
//  otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
// Return the longest ZigZag path contained in that tree.

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

var longestZigZag = function (root) {
    let ans = 0;
    const stack = [[root, 0, null]];
    while (stack.length > 0) {
        const [node, n, left] = stack.pop();
        if (node) {
            ans = Math.max(ans, n);
            stack.push([node.right, left != null && left == 1 ? n + 1 : 1, 0]);
            stack.push([node.left, left != null && left == 0 ? n + 1 : 1, 1]);
        }
    }
    return ans;

};


// var longestZigZag = function(root) { //O(n^2) solution, time limit exceeds 
//     let max = 0
//     const helper = (node, currDir, counter) => {
//         if (node === null) return
//         counter++
//         max = Math.max(max, counter)
//         if (currDir === 'left') {
//             helper(node.right, 'right', counter)
//         } 
//         else { //currDir === 'right
//             helper(node.left, 'left', counter)
//         }
//     } 

//     const traverse = (node) => {
//         if (node === null) return 
//         helper(node.left, 'left', 0)
//         traverse(node.left)
//         helper(node.right, 'right', 0)
//         traverse(node.right)
//     }

//     traverse(root)
//     return max
// };