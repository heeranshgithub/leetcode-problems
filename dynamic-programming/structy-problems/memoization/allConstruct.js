const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return [[]]

  let combinedMultipleWays = []

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //is a prefix
      const suffix = target.slice(word.length)
      const multipleWays = allConstruct(suffix, wordBank, memo)
      const updatedMultipleWays = multipleWays.map((way) => [word, ...way])
      combinedMultipleWays.push(...updatedMultipleWays) //without the spread operator it's gonna nest arrays too deeply right
      //cause updatedMultipleWays is also a 2d array
    }
  }

  memo[target] = combinedMultipleWays
  return combinedMultipleWays
}

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
) //4 combis

console.log(allConstruct("hello", ["cat", "dog", "mouse"])) //[]
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])) // 2 combis
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
)

console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)

// const allConstruct = (target, wordBank) => {
//   if (target === "") return []
//   let allCombinations = []
//   let returnedCombination = null
//   for (word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       //is a prefix
//       const suffix = target.slice(word.length)
//       const combination = allConstruct(suffix, wordBank)
//       if (combination) {
//         returnedCombination = [word, ...combination]
//       }
//     }
//   }

//   if (!returnedCombination)
//     allCombinations = [...allCombinations, [...returnedCombination]]

//   return allCombinations
// }

// const helper = (target, wordBank) => {
//   if (target === "") return []

//   let allReturnedCombinations = []
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       // is a prefix
//       const suffix = target.slice(word.length)
//       const combination = helper(suffix, wordBank)
//       if (combination) {
//         const returnedCombination = [word, ...combination]
//         allReturnedCombinations = [
//           ...allReturnedCombinations,
//           ...returnedCombination,
//         ]
//       }
//     }
//   }
//   console.log(allReturnedCombinations)
//   return allReturnedCombinations.length === 0 ? null : allReturnedCombinations
// }
