const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}

const sortStringAscending = (str) => {
  //O(nlogn)
  return str
    .split("") // Convert the string into an array of characters
    .sort() // Sort the array in ascending order
    .join("") // Join the sorted array back into a string
}

const connectedComponentsCount = (graph) => {
  const set = new Set()
  for (let key in graph) {
    const visited = new Set()
    const stack = [key]
    let seq = ""
    while (stack.length > 0) {
      const current = stack.pop()
      if (!visited.has(current)) {
        visited.add(current)
        if (!seq.includes(current)) seq += current
        stack.push(...graph[current])
      }
    }
    seq = sortStringAscending(seq)
    set.add(seq)
  }
  console.log(set)
  return set.size
}

console.log(connectedComponentsCount(graph))
