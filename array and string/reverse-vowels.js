// 345. Reverse Vowels of a String EASY
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
// and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
  const arr = s.split("")
  let l = 0
  let r = s.length - 1
  console.log(arr[l])
  console.log(arr[r])

  while (l <= r) {
    if (vowels.has(arr[l]) && vowels.has(arr[r])) {
      const temp = arr[r]
      arr[r] = arr[l]
      arr[l] = temp
      l++
      r--
      continue
    }
    if (!vowels.has(arr[l])) l++
    if (!vowels.has(arr[r])) r--
  }

  return arr.join("")
}
// lr
console.log(reverseVowels("OE"))
