// 547. Number of Provinces MEDIUM
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and
// city b is connected directly with city c, then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected,
// and isConnected[i][j] = 0 otherwise. Return the total number of provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const isConnected = [[1]]

const constructGraph = (matrix) => {
  const graph = {}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        if (i === j) {
          if (!(i in graph)) graph[i] = []
          continue
        }
        if (i in graph) graph[i].push(String(j))
        else graph[i] = [String(j)]
      }

      if (matrix[i][j] === 0) {
        if (i === j) {
          if (!(i in graph)) graph[i] = []
          continue
        }
        if (!(i in graph)) graph[i] = []
      }
    }
  }

  return graph
}

var findCircleNum = function (isConnected) {
  const graph = constructGraph(isConnected)
  const added = new Set()
  let count = 0

  for (let node in graph) {
    if (added.has(node)) continue
    const stack = [node]
    count++
    while (stack.length > 0) {
      const curr = stack.pop()
      added.add(curr)
      for (let neighbor of graph[curr]) {
        if (!added.has(neighbor)) stack.push(neighbor)
      }
    }
  }

  return count
}

const graph = constructGraph(isConnected)
console.log(graph)
console.log(findCircleNum(isConnected))
