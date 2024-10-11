// 1466. Reorder Routes to Make All Paths Lead to the City Zero MEDIUM
// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities
// (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
// It's guaranteed that each city can reach city 0 after reorder.
// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const connections = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
]
var minReorder = function (n, connections) {
  // to: (<from city>: [<to cities>])
  // from: (<to city>: [from cities])
  let from = {},
    to = {}

  const insert = (a, b, map) => {
    if (a in map) map[a].push(String(b))
    else map[a] = [String(b)]
  }

  for (const [a, b] of connections) {
    insert(a, b, from)
    insert(b, a, to)
  }

  const queue = ['0']
  const visited = new Set()
  let count = 0

  while (queue.length > 0) {
    const cur = queue.shift()

    if (cur in from) {
      for (let nei of from[cur]) {
        if (visited.has(nei)) continue
        queue.push(nei)
        count++
      }
    }

    if (cur in to) {
      for (let nei of to[cur]) {
        if (visited.has(nei)) continue
        queue.push(nei)
      }
    }

    visited.add(cur)
  }

  return count
}

console.log(minReorder(6, connections))
