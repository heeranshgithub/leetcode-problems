// 1657. Determine if Two Strings Are Close MEDIUM
// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
// https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

// let word1 = "abc",
//   word2 = "bca"

let word1 = "cabbba",
  word2 = "abbccc"

var closeStrings = function (word1, word2) {
  let word1Arr = word1.split("").sort(),
    word2Arr = word2.split("").sort()
  if (word1Arr.join() === word2Arr.join()) return true

  const word1Map = {},
    word2Map = {}
  for (const char of word1Arr) {
    if (char in word1Map) word1Map[char] = word1Map[char] + 1
    else word1Map[char] = 1
  }

  for (const char of word2Arr) {
    if (char in word2Map) word2Map[char] = word2Map[char] + 1
    else word2Map[char] = 1
  }

  for (const charInWord1Map in word1Map) {
    const count = word1Map[charInWord1Map]
    // console.log(
    //   "char in word1Map: ",
    //   charInWord1Map,
    //   "char in word1Map count: ",
    //   count
    // )
    for (const charInWord2Map in word2Map) {
      //   console.log(
      //     "char in word2Map: ",
      //     charInWord2Map,
      //     "char in word1Map count: ",
      //     word2Map[charInWord2Map]
      //   )
      if (count === word2Map[charInWord2Map] && charInWord2Map in word1Map) {
        delete word2Map[charInWord2Map]
        // console.log("word1Map: ", word1Map)
        // console.log("word2Map: ", word2Map)
        break
      }
    }
  }

  return Object.keys(word2Map).length === 0 ? true : false
}

console.log(closeStrings(word1, word2))
