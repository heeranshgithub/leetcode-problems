const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === "") return true

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const booleanResult = canConstruct(suffix, wordBank, memo)
      memo[target] = booleanResult
      if (booleanResult) return true
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
)
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
)

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
)

/* 
how does the brain work. when like i'm making a skateboard out of word bank. i add word from the word bank and keep on adding.
like that from end target just remove prefixes! leaving suffixes.
*/
// const canConstruct2 = (target, wordBank) => { //removing both prefix and suffix
//   if (target === "") return false           // but do i add both prefix and suffix with my brain in alternating steps. NO RIGHT!
//   for (let word of wordBank) {
//     let wordStartIndex = target.indexOf(word)
//     let wordEndIndex = wordStartIndex + (word.length - 1)
//     let newTarget = target
//     if (wordStartIndex === 0) {
//       newTarget = target.slice(wordEndIndex + 1, target.length)
//     }

//     if (wordEndIndex === target.length - 1) {
//       newTarget = target.slice(0, wordStartIndex)
//     }
//     console.log(newTarget)
//     const booleanResult = canConstruct(newTarget, wordBank)

//     if (booleanResult) return true
//   }

//   return false
// }

// console.log(canConstruct2("abcdef", ["abc", "cd", "def", "abcd"]))

// const canConstruct2 = (target, wordBank) => { //in this i'm taking out strings from the middle also, which new adjacency of characters in newTargets which do
//   if (target === "") return true             //which new adjacency of characters in newTargets which do not match the original string
//   console.log("target", target)
//   for (let word of wordBank) {
//     console.log("word: ", word)
//     const wordStartIndex = target.indexOf(word)
//     const wordEndIndex = wordStartIndex + (word.length - 1)
//     // console.log("wordStartIndex: ", wordStartIndex)
//     // console.log("wordEndIndex: ", wordEndIndex)
//     let booleanResult = false
//     if (wordStartIndex >= 0) {
//       const newTargetStart = target.slice(0, wordStartIndex)
//       const newTargetEnd = target.slice(wordEndIndex + 1, target.length) //"bo", "rd", "ate", "t", "ska", "sk", "boar"
//       const newTarget = newTargetStart + newTargetEnd
//       //   console.log("newTargetStart: ", newTargetStart)
//       //   console.log("newTargetEnd: ", newTargetEnd)
//       console.log("newTarget", newTarget)               //ska
//       //   break
//       booleanResult = canConstruct2(newTarget, wordBank)
//     }

//     if (booleanResult) return true
//   }

//   return false
// }

// console.log(
//   canConstruct2("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// )
// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
