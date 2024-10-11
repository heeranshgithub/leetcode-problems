// 643. Maximum Average Subarray I EASY
// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.
// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */ //          l            r
const nums = [5]
const k = 1

var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER
  if (k > nums.length) return maxAvg

  let currSum = 0
  for (let i = 0; i < k; i++) {
    currSum += nums[i]
  }
  maxAvg = Math.max(currSum / k, maxAvg)

  let l = 0
  let r = k
  while (r < nums.length) {
    currSum -= nums[l]
    l++
    currSum += nums[r]
    r++
    maxAvg = Math.max(currSum / k, maxAvg)
  }

  return maxAvg
}

console.log(findMaxAverage(nums, k))
