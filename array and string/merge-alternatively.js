// 1768. Merge Strings Alternately EASY
// You are given two strings word1 and word2. Merge the strings by adding letters
// in alternating order, starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.
// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = ""
  let index = 0
  for (let i = index; i < word1.length; i++) {
    if (word1[i]) res += word1[i] //c   cef
    if (word2[i]) res += word2[i] //ce  cefe
    index = i + 1
  }

  if (word2.length > word1.length) {
    for (let i = index; i < word2.length; i++) {
      res += word2[i]
    }
  }

  return res
}

console.log(mergeAlternately("cf", "eee"))
