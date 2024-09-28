const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

const breadthFirstPrint = (graph, source) => {
    const queue = [source]

    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        queue.push(...graph[current])
    }
}

breadthFirstPrint(graph, 'a')

const depthFirstPrintIterative = (graph, source) => {
  //iterative approach
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current)
    stack.push(...graph[current])
  }
}

// depthFirstPrintIterative(graph, "a")

const depthFirstPrintRecursive = (graph, source) => {
    //   not really necessary
    //   if (graph[source].length === 0) return

  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor)
  }
}

// depthFirstPrintIterative(graph, "a")
// depthFirstPrintRecursive(graph, 'a')