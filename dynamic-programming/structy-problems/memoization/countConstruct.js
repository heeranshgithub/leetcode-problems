const countConstruct = (target, wordBank) => {
  let counter = 0
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if (helper(suffix, wordBank)) {
        counter++
      }
    }
  }

  return counter
}

const helper = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //if it's a prefix
      const suffix = target.slice(word.length)
      const booleanResult = helper(suffix, wordBank, memo)
      memo[target] = booleanResult
      if (booleanResult) return true
    }
  }

  memo[target] = false
  return false
}

// console.log(
//   countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee",
//   ])
// )
console.log(countConstruct("abcdef", ["abc", "cd", "def", "abcd"]))
// console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
