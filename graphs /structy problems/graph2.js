const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
]

const undirectedPath = (edges, nodeA, nodeB) => {
  const visited = new Set()
  const graph = {}
  for (let edge of edges) {
    const node0 = edge[0]
    const node1 = edge[1]

    if (!(node0 in graph)) graph[node0] = [] // Always initialize with an empty array if it doesn't exist
    if (!(node1 in graph)) graph[node1] = []

    graph[node0].push(node1)
    graph[node1].push(node0)

  }

  console.log(graph)

  const helper = (node) => {
    if (visited.has(node)) return
    visited.add(node)
    for (let neighbor of graph[node]) helper(neighbor)
  }

  helper(nodeA)

  const nodeAIncludes = visited.has(nodeA)
  const nodeBIncludes = visited.has(nodeB)

  return nodeAIncludes && nodeBIncludes
}
undirectedPath(edges, "j", "m")
