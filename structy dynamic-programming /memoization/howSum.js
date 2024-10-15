const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
  if (targetSum < 0) return null
  if (targetSum === 0) return []

  for (let num of numbers) {
    const remainder = targetSum - num
    const list = howSum(remainder, numbers, memo)
    // memo[targetSum] = list
    if (list !== null) {
      const updatedList = [...list, num]
      return updatedList
    }
  }

//   memo[targetSum] = null
  return null
}

console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(8, [2,3,5]))
// console.log(howSum(300, [7, 14]))

// const howSum = (targetSum, numbers) => {
//   if (targetSum === 0) return []
//   if (numbers.includes(targetSum)) return [targetSum]

//   const smallestNumber = Math.min(...numbers)

//   for (let num of numbers) {
//     const remainder = targetSum - num
//     if (remainder < smallestNumber && remainder !== 0) continue
//     const list = [num]
//     const howSumList = helper(targetSum - num, numbers, list, smallestNumber, num)
//     if (howSumList.length >= 2) return howSumList
//   }

//   return null
// }

// const helper = (targetSum, numbers, list, smallestNumber, numAdded) => {
//   if (targetSum === 0){
//     list.push(numAdded)
//     return list
//   }
// //   if (numbers.includes(targetSum)) {
// //     list.push(targetSum)
// //     return list
// //   }
//   let resultList = [...list]
//   for (let num of numbers) {
//     const remainder = targetSum - num
//     if (remainder < smallestNumber && remainder !== 0) continue
//     resultList = helper(targetSum - num, numbers, list, smallestNumber, num)
//     // if (resultList.length === list.length) list.pop()
//     if (resultList.length > list.length) return list
//   }

//   if (list.length === resultList.length) list.pop()

//   return list
// }

// console.log(howSum(7, [5, 3, 4]))
