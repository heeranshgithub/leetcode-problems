// 1207. Unique Number of Occurrences EASY
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr0 = [1, 2, 2, 1, 1, 3] // The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
const arr1 = [1, 2] // -> false
const arr2 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0] // true

var uniqueOccurrences = function (arr) {
  const map = {}
  for (num of arr) {
    if (num in map) map[num] = map[num] + 1
    else map[String(num)] = 1
  }

  const occurrences = new Set()
  for (const key in map) {
    occurrences.add(map[key])
  }

  for (const key in map) {
    if (!occurrences.has(map[key])) return false
    occurrences.delete(map[key])
  }

  return true
}

console.log(uniqueOccurrences(arr0))
console.log(uniqueOccurrences(arr1))
console.log(uniqueOccurrences(arr2))
