// 151. Reverse Words in a String MEDIUM
// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a
// single space separating the words. Do not include any extra spaces.
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
// let trimmedS = s.trim()
// let cleanS = trimmedS.split(/\s+/) 
// console.log(cleanS)
let s = "a good   example"
var reverseWords = function (s) {
  let trimmedS = s.trim()
  const cleanSArr = trimmedS.split(/\s+/)
  let l = 0
  let r = cleanSArr.length - 1

  while (l <= r ) {
    const temp = cleanSArr[r]
    cleanSArr[r] = cleanSArr[l]
    cleanSArr[l] = temp
    l++
    r--
  }

  return cleanSArr.join(' ')
}
console.log(reverseWords(s))