// 1071. Greatest Common Divisor of Strings EASY
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that
// x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  for (let i = str2.length; i > 0; i--) {
    const str2Sliced = str2.slice(0, i)

    //if is a str2sliced is a prefix
    if (str1.indexOf(str2Sliced) === 0) {
      const str1Sliced = str1.slice(str2Sliced.length) //removing prefix str2Sliced from str1
      const str = helper(str1Sliced, str2Sliced)
      if (str.length > 0) return str
    }
  }

  return ""
}

const helper = (str1, str2) => {
  if (str1 === "") return str2

  if (str1.indexOf(str2) === 0) {
    const str1Sliced = str1.slice(str2.length)
    const str = helper(str1Sliced, str2)
    return str
  }

  return ""
}

// console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings('ABCABC', "ABC"))
// console.log(gcdOfStrings("LEET", "CODE"))
// console.log(gcdOfStrings("AB", "ABAB"))
console.log(gcdOfStrings("ABABAB", "A"))
