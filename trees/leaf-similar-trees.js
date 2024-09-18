// 872. Leaf-Similar Trees EASY
/* 
Consider all the leaves of a binary tree, from left to right order, 
the values of those leaves form a leaf value sequence.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const stack1 = [root1]
    const leaves1 = []
    while (stack1.length > 0) {
        const curr = stack1.pop()
        if (curr.left === null && curr.right === null) leaves1.push(curr.val) //leaf node
        if (curr.right !== null) stack1.push(curr.right)
        if (curr.left !== null) stack1.push(curr.left)
    }

    const stack2 = [root2]
    let counter = 0
    while (stack2.length > 0) {
        const curr = stack2.pop()
        if (curr.left === null && curr.right === null) { //leaf node
            if(counter === leaves1.length) return false
            if(leaves1[counter] !== curr.val) return false
            counter++
        }
        if (curr.right !== null) stack2.push(curr.right)
        if (curr.left !== null) stack2.push(curr.left)
    }
    if (counter !== leaves1.length) return false

    return true
};
