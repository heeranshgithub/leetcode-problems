// 605. Can Place Flowers EASY
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the
// no-adjacent-flowers rule and false otherwise.
// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const flowerbed = [0, 0, 1, 0, 0]
const n = 1
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true //if no flowers have to be placed then just return true
  if (flowerbed.length === 1) {
    //dealing with flowerbed of length 1
    if (flowerbed[0] === 0) return true
    if (flowerbed[0] === 1) return false
  }

  // dealing with flowerbed arr of at least length 2
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue //if plot in flowerbed filled just continue
    if (i === 0) {
      // dealing with index 0
      if (flowerbed[i + 1] === 0) {
        flowerbed[i] = 1
        n--
      }
    } else if (i === flowerbed.length - 1) {
      //dealing with last index
      if (flowerbed[i - 1] === 0) {
        flowerbed[i] = 1
        n--
      }
    } else {
      //dealing with middle indices
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1
        n--
      }
    }
    if (n === 0) return true
  }

  return false
}

console.log(canPlaceFlowers(flowerbed, n))
