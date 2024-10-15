// const fib = (n) => {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   const table = Array(n + 1)
//   console.log(table)
// //   for (let i = 0; i <= n; i++) {
// //     table[i] = 0
// //   }
// //   table[1] = 1

//   for (let i = 2; i <= n; i++) {
//     table[i] = table[i-1] + table[i-2]
//   }

//   return table[n]
// }

// console.log(fib(60))

const fib = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  console.log(table)

  return table[n]
}

console.log(fib(6))
