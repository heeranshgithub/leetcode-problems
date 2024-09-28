const gridTraveler = (m, n) => {
  const table = Array()
  for (let i = 0; i < m + 1; i++) {
    table.push(Array(n + 1).fill(0))
  }

  table[1][1] = 1

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i - 1 >= 0) table[i][j] += table[i - 1][j]
      if (j - 1 >= 0) table[i][j] += table[i][j - 1]
    }
  }

//   console.log(table)
  return table[m][n]
}

console.log(gridTraveler(3, 3)) //6
console.log(gridTraveler(18, 18)) //2333606220
