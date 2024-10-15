// 334. Increasing Triplet Subsequence MEDIUM
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const nums0 = [1, 2, 3, 4, 5] // -> true
const nums1 = [5, 4, 3, 2, 1] // -> false
const nums2 = [2, 1, 5, 0, 4, 6] // -> true
const nums3 = [2, 4, -2, -3] // -> false
const nums4 = [0, 4, 2, 1, 0, -1, -3] // -> false
const nums5 = [2, 1, 0, 5, 4, 6] // -> true

var increasingTriplet = function (nums) {
  let firstNumber = Infinity
  let secondNumber = Infinity

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber) {
      return true // Found a number greater than both first and second
    }
    if (currentNumber > firstNumber && currentNumber < secondNumber) {
      secondNumber = currentNumber // Update secondNumber to be the smallest valid candidate after firstNumber
    } else if (currentNumber < firstNumber) {
      firstNumber = currentNumber // Update firstNumber if a smaller number is found
    }
  }
  return false
}

// console.log(increasingTriplet(nums0))
// console.log(increasingTriplet(nums1))
// console.log(increasingTriplet(nums2))
// console.log(increasingTriplet(nums3))
// console.log(increasingTriplet(nums4))
console.log(increasingTriplet(nums5))
