// 841. Keys and Rooms MEDIUM
// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0.
// Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it,
// denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i,
// return true if you can visit all the rooms, or false otherwise.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
//   0        1         2        3       4
// const rooms = [[1, 3], [1, 4], [2, 3, 4, 1], [], [4, 3, 2]]
// const rooms = [[1], [2], [3], []]
const rooms = [[1, 3], [3, 0, 1], [2], [0]]

const constructGraph = (rooms) => {
  const graph = {}
  for (const [node, room] of rooms.entries()) {
    const stringNode = String(node)
    graph[stringNode] = []
    for (let neighbor of room) {
      const stringNeighbor = String(neighbor)
      if (stringNeighbor === stringNode) continue
      graph[stringNode].push(stringNeighbor)
    }
  }

  return graph
}

console.log(constructGraph(rooms))

const canVisitAllRooms = (rooms) => {
  const graph = constructGraph(rooms)
  const added = new Set()
  const stack = ["0"]
  while (stack.length > 0) {
    const curr = stack.pop()
    added.add(curr)
    for (let neighbor of graph[curr])
      if (!added.has(neighbor)) stack.push(neighbor)
  }

  return added.size === rooms.length ? true : false
}

console.log(canVisitAllRooms(rooms))

// const constructGraph = (rooms) => {
//     const graph = {}
//     for (const room of rooms) {
//         if (room.length === 0) continue
//         const node = String(room[0])
//         if ( !(node in graph) ) graph[node] = []
//         for (let [index, key] of room.entries()) {
//             if (index === 0) continue
//             const keyString = String(key)
//             graph[node].push(keyString)
//             if (keyString in graph) graph[keyString].push(node)
//             else graph[keyString] = [node]
//         }
//     }

//     return graph
// }

// console.log(constructGraph(rooms))

// const canVisitAllRooms = (rooms) => { //dfs version
//     const graph = constructGraph(rooms)
//     let count = 0
//     const added = new Set()
//     for (let node in graph) {
//         if (added.has(node)) continue
//         const stack = [node]

//         while(stack.length > 0) {
//             count++
//             if (count > 1) return false
//             const curr = stack.pop()
//             added.add(curr)

//             for (let neighbor of graph[curr]) {

//             }
//         }
//     }

//     return true
// }

// var canVisitAllRooms = function (rooms) {
//   const keys = new Set()

//   for (const [index, room] of rooms.entries()) {
//     console.log("index: ", index)
//     console.log("keys: ", keys)
//     if (!keys.has(index) && index > 0 && room.length > 0) return false

//     for (const key of room) {
//       keys.add(key)
//     }
//   }

//   return true
// }

// console.log(canVisitAllRooms(rooms))
