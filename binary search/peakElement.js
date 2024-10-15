// 162. Find Peak Element MEDIUM
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.
// https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums0 = [1, 2, 3, 1] // -> 2
const nums1 = [1, 2, 1, 3, 5, 6, 4] // -> 1 or 4
const nums2 = [1] // ->  0
const nums3 = [2, 1] // -> 0
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0

  for (let [i, num] of nums.entries()) {
    if (
      i - 1 >= 0 &&
      i + 1 < nums.length &&
      num > nums[i - 1] &&
      num > nums[i + 1]
    )
      return i

    if (i - 1 < 0 && i + 1 < nums.length && num > nums[i + 1]) return i
    if (i - 1 >= 0 && i + 1 >= nums.length && num > nums[i - 1]) return i
  }

  return -1
}

console.log(findPeakElement(nums0))
console.log(findPeakElement(nums1))
console.log(findPeakElement(nums2))
console.log(findPeakElement(nums3))
