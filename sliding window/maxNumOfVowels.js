// 1456. Maximum Number of Vowels in a Substring of Given Length MEDIUM
// Given a string s and an integer k, return the maximum number of vowel letters in
// any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const s0 = "abciiidef", // The substring "iii" contains 3 vowel letters.
  k0 = 3
const s1 = "aeiou", // Any substring of length 2 contains 2 vowels.
  k1 = 2
const s2 = "leetcode", // "lee", "eet" and "ode" contain 2 vowels.
  k2 = 3

const maxVowels = (s, k) => {
  const vowels = new Set(["a", "e", "i", "o", "u"])

  let maxCount = 0
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) maxCount++
  }

  for (let i = k; i < s.length; i++) {
    let count = maxCount

    if (vowels.has(s[i])) count++
    if (vowels.has(s[i - k])) count--

    maxCount = Math.max(count, maxCount)
  }

  return maxCount
}

console.log(maxVowels(s0, k0))
console.log(maxVowels(s1, k1))
console.log(maxVowels(s2, k2))

// var maxVowels = function (s, k) { //time limit exceeded solution. if you look carefully there are overlapping windows and that's how it's gonna get solved optimally.
//   const vowels = new Set(["a", "e", "i", "o", "u"])
//   let maxCount = 0
//   let r = k - 1
//   while (r < s.length) {
//     let count = 0
//     let l = r - k + 1
//     while (l <= r) {
//       if (vowels.has(s[l])) {
//         count++
//       }
//       l++
//     }
//     maxCount = Math.max(maxCount, count)
//     r++
//   }

//   return maxCount
// }


