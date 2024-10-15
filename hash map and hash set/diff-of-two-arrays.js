// 2215. Find the Difference of Two Arrays EASY
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

// const nums1 = [1, 2, 3],
//   nums2 = [2, 4, 6] // -> [[1,3],[4,6]]

const nums1 = [1, 2, 3, 3],
  nums2 = [1, 1, 2, 2] // -> [[3],[]]
var findDifference = function (nums1, nums2) {
  const set1 = new Set([...nums1])
  const set2 = new Set([...nums2])
  let res = []
  let res1 = [],
    res2 = []
  for (let num1 of set1) if (!set2.has(num1)) res1.push(num1)
  for (let num2 of set2) if (!set1.has(num2)) res2.push(num2)
  res[0] = [...res1]
  res[1] = [...res2]

  return res
}

console.log(findDifference(nums1, nums2))
