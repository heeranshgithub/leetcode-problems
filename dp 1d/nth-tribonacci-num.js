// 1137. N-th Tribonacci Number EASY
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.
// https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number} n
 * @return {number}
 */
const n0 = 1
const n1 = 25

var tribonacci = function (n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  const map = {}

  return helper(n, map)
}

const helper = (n, map) => {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  if (n in map) return map[n]

  map[n] = helper(n - 1, map) + helper(n - 2, map) + helper(n - 3, map)
  return map[n]
}
