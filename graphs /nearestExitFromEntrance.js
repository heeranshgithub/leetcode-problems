// 1926. Nearest Exit from Entrance in Maze MEDIUM
// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+').
// You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze.
// Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

const maze0 = [
    ["+", "+", ".", "+"],
    [".", ".", ".", "+"],
    ["+", "+", "+", "."],
  ],
  entrance0 = [1, 2]

const maze1 = [
    ["+", "+", "+"],
    [".", ".", "."],
    ["+", "+", "+"],
  ],
  entrance1 = [1, 0]

const maze2 = [[".", "+"]],
  entrance2 = [0, 0]

var nearestExit = function (maze, entrance) {
  const queue = [[...entrance, 0]] // [x, y, distance]
  const visited = new Set()
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ]

  // Mark the entrance as visited
  visited.add(`${entrance[0]},${entrance[1]}`)

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift()

    for (const [dx, dy] of directions) {
      const newX = x + dx
      const newY = y + dy

      // Check if the new position is within bounds
      if (
        newX >= 0 &&
        newX < maze.length &&
        newY >= 0 &&
        newY < maze[0].length
      ) {
        if (maze[newX][newY] === "." && !visited.has(`${newX},${newY}`)) {
          // Check if we are at an exit 
          if (
            newX === 0 ||
            newX === maze.length - 1 ||
            newY === 0 ||
            newY === maze[0].length - 1
          ) {
            return dist + 1 // Found the nearest exit
          }

          // If not an exit, add to the queue for further exploration
          queue.push([newX, newY, dist + 1])
          visited.add(`${newX},${newY}`)
        }
      }
    }
  }

  return -1 // No exit found
}

// Why Add to visited Here (Inside the Loop):
// The line visited.add(${newX},${newY}) is placed immediately after we enqueue the cell for processing because we want to mark the cell as "visited" the moment it's enqueued, not when it's dequeued. This is important because:

// Once a cell is enqueued, we already know it will be processed, so marking it as visited prevents it from being enqueued again in future iterations.
// If you mark a cell as visited only after dequeuing, you run the risk of enqueuing the same cell multiple times from different paths.

console.log(nearestExit(maze0, entrance0)) // Expected output: 1

// var nearestExit = function (maze, entrance) {
//   const queue = [[...entrance, 0]]
//   const visited = new Set()
//   let minDistance = Number.MAX_SAFE_INTEGER

//   while (queue.length > 0) {
//     const curr = queue.shift()
//     const x = curr[0]
//     const y = curr[1]
//     const dist = curr[2]

//     if (dist !== 0 && (x < 0 || x >= maze.length)) {
//       //exiting by going out of bounds through x-axis
//       minDistance = Math.min(dist, minDistance)
//     }

//     if (dist !== 0 && (y < 0 || y >= maze[0].length)) {
//       //exiting by going out of bounds through x-axis
//       minDistance = Math.min(dist, minDistance)
//     }

//     // adding all the possible exits in this iteration
//     if (dist !== 0 && y - 1 < 0) queue.push([x, y - 1, dist])
//     if (dist !== 0 && x - 1 < 0) queue.push([x - 1, y, dist])
//     if (dist !== 0 && y + 1 >= maze[0].length) queue.push([x, y + 1, dist])
//     if (dist !== 0 && x + 1 >= maze.length) queue.push([x + 1, y, dist])

//     // adding all the possible next positions
//     if (!visited.has(`${x},${y - 1}`) && y - 1 >= 0 && maze[x][y - 1] === ".")
//       queue.push([x, y - 1, dist + 1])
//     if (!visited.has(`${x - 1},${y}`) && x - 1 >= 0 && maze[x - 1][y] === ".")
//       queue.push([x - 1, y, dist + 1])
//     if (
//       !visited.has(`${x},${y + 1}`) &&
//       y + 1 < maze[0].length &&
//       maze[x][y + 1] === "."
//     )
//       queue.push([x, y + 1, dist + 1])
//     if (
//       !visited.has(`${x + 1},${y}`) &&
//       x + 1 < maze.length &&
//       maze[x + 1][y] === "."
//     )
//       queue.push([x + 1, y, dist + 1])

//     visited.add(`${x},${y}`)
//   }

//   return minDistance === Number.MAX_SAFE_INTEGER ? -1 : minDistance
// }

// console.log(nearestExit(maze1, entrance1))
