// 1161. Maximum Level Sum of a Binary Tree MEDIUM
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function buildTreeFromArray(arr) {
  if (arr.length === 0 || arr[0] === null) return null // If input array is empty or first element is null

  // Initialize the root node
  let root = new TreeNode(arr[0])
  let queue = [root] // Queue to keep track of tree nodes
  let i = 1 // Index for the array

  // Traverse the array and build the tree using BFS
  while (i < arr.length) {
    let currentNode = queue.shift() // Get the current node from the queue

    // Add the left child if it exists
    if (arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i])
      queue.push(currentNode.left) // Add to the queue for further processing
    }
    i++ // Move to the next element in the array

    // Add the right child if it exists
    if (i < arr.length && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i])
      queue.push(currentNode.right) // Add to the queue for further processing
    }
    i++ // Move to the next element in the array
  }

  return root // Return the root of the constructed binary tree
}

let arr = [1, 7, 0, 7, -8, null, null]
let root = buildTreeFromArray(arr)

// Function to print the tree in level order (BFS) to check if it's correct
function printTree(root) {
  if (!root) return

  // Initialize a queue for level-order traversal
  let queue = [root]
  let result = ""

  while (queue.length > 0) {
    let levelSize = queue.length
    let levelValues = []

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()
      levelValues.push(currentNode ? currentNode.val : " ")

      if (currentNode) {
        queue.push(currentNode.left)
        queue.push(currentNode.right)
      }
    }

    result += levelValues.join(" ") + "\n"
  }

  // Print the result
  console.log(result)
}

printTree(root)

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
var maxLevelSum = function (root) { //O(n) solution
    const queue = [[root, 1]]
    const map = new Map()
    const mapLevelSum = new Map()
    map.set(1, [root.val])
    while (queue.length > 0) {
        const currPair = queue.shift()
        const currNode = currPair[0]
        const currLevel = currPair[1]
        
        if (mapLevelSum.has(currLevel)) {
            const levelSum = mapLevelSum.get(currLevel)
            mapLevelSum.set(currLevel, levelSum + currNode.val)
        } else {
            mapLevelSum.set(currLevel, currNode.val)
        }

        if (currNode.left !== null) {
            queue.push([currNode.left, currLevel + 1])
            if (map.has(currLevel + 1)) {
                const levelArray = map.get(currLevel + 1)
                map.set(currLevel + 1, [...levelArray, currNode.left.val])
            } else map.set(currLevel + 1, [currNode.left.val])
        }
        if (currNode.right !== null) {
            queue.push([currNode.right, currLevel + 1])
            if (map.has(currLevel + 1)) {
                const levelArray = map.get(currLevel + 1)
                map.set(currLevel + 1, [...levelArray, currNode.right.val])
            } else map.set(currLevel + 1, [currNode.right.val])
        }
    }

    let max = Number.MIN_SAFE_INTEGER
    let maxLevel = 1
    mapLevelSum.forEach((value, key) => {
        if (value > max) {
            max = value
            maxLevel = key
        }
    })

    return maxLevel
}

// var maxLevelSum = function (root) { //O(n^2) solution
//   const queue = [[root, 1]]
//   const map = new Map()
//   map.set(1, [root.val])
//   while (queue.length > 0) {
//     const currPair = queue.shift()
//     const currNode = currPair[0]
//     const currLevel = currPair[1]
//     if (currNode.left !== null) {
//       queue.push([currNode.left, currLevel + 1])
//       if (map.has(currLevel + 1)) {
//         const levelArray = map.get(currLevel + 1)
//         map.set(currLevel + 1, [...levelArray, currNode.left.val])
//       } else map.set(currLevel + 1, [currNode.left.val])
//     }
//     if (currNode.right !== null) {
//       queue.push([currNode.right, currLevel + 1])
//       if (map.has(currLevel + 1)) {
//         const levelArray = map.get(currLevel + 1)
//         map.set(currLevel + 1, [...levelArray, currNode.right.val])
//       } else map.set(currLevel + 1, [currNode.right.val])
//     }
//   }

//   let max = Number.MIN_SAFE_INTEGER
//   let maxLevel = 1
//   map.forEach((valueArray, level) => {
//     console.log(valueArray)
//     let sum = 0
//     valueArray.forEach((num, index) => (sum += num))
//     if (sum > max) {
//       max = Math.max(sum, max)
//       maxLevel = level
//     }
//   })

//   return maxLevel
// }

maxLevelSum(root)
