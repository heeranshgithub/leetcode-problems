const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum < 0) return null
  if (targetSum === 0) return []

  let shortestList = null
  for (let num of numbers) {
    const remainder = targetSum - num
    const combination = bestSum(remainder, numbers, memo)
    if (combination !== null) {
      const list = [...combination, num]
      if (shortestList === null || list.length < shortestList.length)
        shortestList = list
    }
  }

  memo[targetSum] = shortestList
  return shortestList
}

const bestSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum < 0) return null
  if (targetSum === 0) return []

  let shortestList = null
  for (let num of numbers) {
    const remainder = targetSum - num
    const list = bestSum2(remainder, numbers, memo)
    if (list !== null) {
      list.push(num)
      if (shortestList === null || list.length < shortestList.length)
        shortestList = list
    }
  }

  memo[targetSum] = shortestList
  return shortestList
}

console.log(bestSum(100, [1, 2, 5, 25]))
console.log(bestSum2(100, [1, 2, 5, 25]))

// const bestSum = (targetSum, numbers) => {
//   if (targetSum < 0) return null
//   if (targetSum === 0) return []

//   let minListLength = targetSum + 1
//   const listOfLists = []
//   for (let num of numbers) {
//     const remainder = targetSum - num
//     const list = bestSum(remainder, numbers)
//     if (list !== null) {
//       list.push(num)
//       listOfLists.push(list)
//       minListLength = Math.min(list.length, minListLength)
//     }
//   }

//   console.log(listOfLists)
//   for (let list of listOfLists) {
//     if (minListLength === list.length) return list
//   }

//   return null
// }

// console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(8, [2, 3, 5]))
// console.log(howSum(300, [7, 14]))
// console.log(bestSum(8, [1, 4, 5]))
