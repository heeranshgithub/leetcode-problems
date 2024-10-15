// 746. Min Cost Climbing Stairs EASY
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.
// https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} cost
 * @return {number}
 */

const cost0 = [10, 15, 20] // -> 15
const cost1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] // -> 6

var minCostClimbingStairs = function (cost) {
  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2])
  }

  return Math.min(cost[0], cost[1])
}

// var minCostClimbingStairs = function (cost) {
//   if (cost.length === 0 || 1) return 0

//   const last = cost[cost.length - 1],
//     secondLast = cost[cost.length - 2]

//   if (last < secondLast) {
//     cost.splice(cost.length - 1, 1)
//     console.log(cost)
//     return first + minCostClimbingStairs(cost)
//   }

//   cost.splice(cost.length - 2, 2)
//   console.log(cost)
//   return second + minCostClimbingStairs(cost)
// }

// let a = 2
// if (a === 1 || 2) console.log("damnnnn")
// console.log(minCostClimbingStairs(cost1))
