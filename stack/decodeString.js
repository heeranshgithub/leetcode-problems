// 394. Decode String MEDIUM
// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
// Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
// For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.
// https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

const s0 = "3[a]2[bc]" //-> "aaabcbc"
const s1 = "3[a2[c]]" //-> "accaccacc"
const s2 = "2[abc]3[cd]ef" //-> "abcabccdcdcdef"
const s3 = "100[leetcode]" //-> 100 * "leetcode"
const s4 = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef" //-> "zzzyypqfejkjkfejkjkfejkjkfejkjkyypqfejkjkfejkjkfejkjkfejkjkef"
var decodeString = function (s) {
  const stack = []
  let pointer = 0

  while (pointer < s.length) {
    let cur = s[pointer]
    if (cur !== "]") stack.push(cur)
    else if (cur === "]") {
      let cache = "",
        stackTop //using this to stored popped letters to pushed them back in after multiplying with respecting numbers
      if (stack.length > 0) stackTop = stack[stack.length - 1]
      while (stack.length > 0 && stackTop !== "[") {
        cache += stack.pop()
        if (stack.length > 0) stackTop = stack[stack.length - 1]
      }
      stack.pop() //removing '[', when finally encountered
      if (stack.length > 0) stackTop = stack[stack.length - 1]
      let num = ""
      while (stack.length > 0 && stackTop >= 0 && stackTop <= 9) {
        num += stack.pop()
        if (stack.length > 0) stackTop = stack[stack.length - 1]
      }

      const numArr = num.split("") //num also reversed, so reversing it back to fix it

      let numRev = ""
      while (numArr.length > 0) {
        numRev += numArr.pop()
      }

      const cachedArr = cache.split("") //letters in cache are reversed after popping it from stack. so reversing it back to original positions of letters before pushing them back into the stack.
      let revCache = ""
      while (cachedArr.length > 0) {
        revCache += cachedArr.pop()
      }

      for (let i = 0; i < numRev; i++) {
        for (const char of revCache) stack.push(char)
      }

      //   for (let i = 0; i < numRev; i++) stack.push(revCache) //putting cached letters 'num' times back into the stack which is basically multiplying
      //   for (let i = 0; i < num; i++) stack.push(cache)
    }
    pointer++
  }

  return stack.join("")
}

// console.log(decodeString(s0))
// console.log(decodeString(s1))
// console.log(decodeString(s2))
// console.log(decodeString(s3))
console.log(decodeString(s4))
