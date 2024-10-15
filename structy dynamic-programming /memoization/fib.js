const fib = (n, map) => {
  if (n <= 2) return 1
  if (map[n]) return map[n]

  map[n - 1] = fib(n - 1, map)
  map[n - 2] = fib(n - 2, map)

  return map[n - 1] + map[n - 2]
}

console.log(fib(40, {}))
