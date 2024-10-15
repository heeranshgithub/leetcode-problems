// 198. House Robber MEDIUM
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will
// automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight
// without alerting the police.
// https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums0 = [1, 2, 3, 1] // -> 4
const nums1 = [2, 7, 9, 3, 1] // -> 12
const nums2 = [2, 1, 1, 2] // -> 4  finding the max of oddCount and evenCount doesn't work here.

const rob = (nums) => {
    let rob1 = 0
    let rob2 = 0

    for (let num of nums) {
        num = Math.max(rob1 + num, rob2)
        rob1 = rob2
        rob2 = num
    }

    return rob2
}

console.log(rob(nums0))
console.log(rob(nums1))
console.log(rob(nums2))


// var rob = (nums) => {
//   const robbed = new Set()
//   let maxSum = 0
//   for (let i = 0; i < nums.length; i++) {
//     console.log("index: ", i)
//     if (robbed.has(i) || robbed.has(i - 1) || robbed.has(i + 1)) continue
//     const curr = nums[i]
//     let nextToCurr = Number.MIN_SAFE_INTEGER
//     if (i + 1 < nums.length) nextToCurr = nums[i + 1]
//     if (curr >= nextToCurr) {
//       maxSum += curr
//       robbed.add(i)
//     } else {
//       maxSum += nextToCurr
//       robbed.add(i + 1)
//     }
//     console.log("maxSum: ", maxSum)
//     console.log("robbed: ", robbed)
//     // console.log("cantBeRobbed: ", cantBeRobbed)
//   }

//   return maxSum
// }

// console.log(rob(nums0))
// console.log(rob(nums1))
// console.log(rob(nums2))

// var rob = function (nums) {
//   let oddCount = 0
//   let evenCount = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) evenCount += nums[i]   // even index
//     else oddCount += nums[i]        // odd index
//   }

//   return Math.max(oddCount, evenCount)
// }

// console.log(rob(nums0))
// console.log(rob(nums1))
