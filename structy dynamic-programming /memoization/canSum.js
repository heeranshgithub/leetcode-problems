const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum < 0) return false

    if (targetSum in memo) return memo[targetSum]

  if (targetSum === 0 || numbers.includes(targetSum)) return true

  for (let num of numbers) {
    memo[targetSum] = canSum(targetSum - num, numbers, memo)
    if (memo[targetSum]) return true
  }

  return false 
}

console.log(canSum(300, [7, 14]))
