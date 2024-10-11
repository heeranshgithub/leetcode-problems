// 443. String Compression MEDIUM
// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
// Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.
// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {character[]} chars
 * @return {number}
 */

const chars0 = ["a", "a", "b", "b", "c", "c", "c"] // => 6
const chars1 = ["a"]
//                                   4                                       12
const chars2 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//               e                  rem                                      s      charCount = 12

const compress = (chars) => {
  let start = chars.length - 1,
    end = chars.length - 1
  while (start >= 0) {
    let charCount = 0
    while (end >= 0 && chars[start] === chars[end]) {
      charCount++
      end--
    }

    // if charCount === 1, then don't need to do anything. like don't need to remove or add anything
    if (charCount > 1) {
      charCount = String(charCount).split("")
      let removeFrom = end + 2 + charCount.length // end + 1 => character itself,  (end + 1) + charCount.length to actually remove from
      let charCountPointer = 0
      let charsArrPointer = end + 2
      while (charsArrPointer < removeFrom) {
        chars[charsArrPointer] = charCount[charCountPointer]
        charsArrPointer++
        charCountPointer++
      }

      const removeCount = start - removeFrom + 1 // plus one cause has to remove itself also
      chars.splice(removeFrom, removeCount)
    }
    start = end
  }

  return chars
}

console.log(compress(chars0))
console.log(compress(chars1))
console.log(compress(chars2))

// let arr = [1, 2, 0, 3, 0, 4, 0, 0, 5]
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1) // Removes the 0 at index i
//   }
// }
// arr.splice(0, 3)
// console.log(arr)

// var compress = function (chars) {
//   let resultCount = 0
//   let start = 0
//   let end = 0
//   while (end < chars.length) {
//     // might be a beginning of consecutive repeating characters
//     if (chars[start] === chars[end]) {
//       let numCount = 1 // one char found, so it will be added to numResult at least
//       end++ // incrementing end to check further repeating characters
//       while (end < chars.length && chars[start] === chars[end]) {
//         numCount++
//         end++
//       }

//       if (numCount === 1) resultCount++
//       else {
//         numCount = String(numCount).split("")
//         resultCount += numCount.length + 1
//       }
//       start = end
//     }
//   }

//   return resultCount
// }

// console.log(compress(chars0))
// console.log(compress(chars1))
// console.log(compress(chars2))
