// 392. Is Subsequence EASY
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s0 = "abc"
const t0 = "ahbgdc"
const s1 = "axc"
const t1 = "ahbgdc"
const s2 = "b"
const t2 = "c"
const s3 = "acb"
const t3 = "ahbgdc"

var isSubsequence = function (s, t) {
  if (s === "") return true
  if (t.length < s.length) return false
  if (t.length === s.length && t !== s) return false

  let sPointer = 0
  let tPointer = 0
  while (tPointer < t.length) {
    if (t[tPointer] === s[sPointer]) sPointer++
    tPointer++

    if (sPointer === s.length) return true
  }

  return false
}

console.log(isSubsequence(s3, t3))
