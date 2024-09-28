const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n
  const flippedKey = n + "," + m
  if (key in memo) return memo[key]
  if (flippedKey in memo) return memo[flippedKey]
  if (m == 0 || n == 0) return 0
  if ((m == 2 && n == 1) || (m == 1 && n == 2) || (m == 1 && n == 1)) return 1
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveler(3, 3)) //6
console.log(gridTraveler(18, 18)) //2333606220

//oopsie without comma possible
// m = 42 and n = 3, key = 423
// m = 4 and n = 23, key = 423 lol, fucked up code now
