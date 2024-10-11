// 2390. Removing Stars From a String MEDIUM
// You are given a string s, which contains stars *.
// In one operation, you can:
// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.
// Note:
// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.
// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
const s0 = "leet**cod*e" // -> lecoe
const s1 = "erase*****" // -> ""

const removeStars = (s) => {
  const stack = []
  for (const char of s) {
    if (char !== "*") stack.push(char)
    else {
      stack.pop()
    }
  }

  return stack.join("")
}
console.log(removeStars(s0))
console.log(removeStars(s1))
// var removeStars = function (s) {
//   const stack = []
//   let numOfStars = 0
//   for (let i = 0; i < s.length; i++) {
//     // populating the stack with 's' string's elements
//     stack.push(s[i])
//     if (s[i] === "*") numOfStars++ // counting the number of stars to create a result array with length in accordance to it. doing so because will add element at the end and will come backwards.
//   }
//   let resArr = Array(s.length - numOfStars * 2) // creating the resultant array. each star will take a letter with it. so that's the length calculation.
//   let resArrPointer = resArr.length - 1 // pointer to the end of array to come backwards

//   while (stack.length > 0) {
//     //populating the resArr with the help of a stack
//     let cur = stack.pop()
//     if (cur === "*") {
//       // going deep the stack until a letter is found and then popping it.
//       let numOfStarsTillNextLetter = 0 // and keeping track of number of stars encountered in between, to push them back into the stack after the first letter found is removed
//       while (cur === "*") {
//         cur = stack.pop()
//         if (cur === "*") numOfStarsTillNextLetter++
//       }
//       stack.push(...new Array(numOfStarsTillNextLetter).fill("*")) // re-populating the stack with the stacks encountered in between
//     } else {
//       // cur not a star
//       resArr[resArrPointer] = cur   // adding letter to the end of resArr
//       resArrPointer--              // decrementing the end pointer
//     }
//   }

//   return resArr.join("")
// }

// console.log(removeStars(s0))
// console.log(removeStars(s1))
