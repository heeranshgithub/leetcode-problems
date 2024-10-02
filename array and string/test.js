let str1 = 'ababcd'
let str2 = 'abab'
const str2Sliced = str2.slice(0, 1)
console.log(str2Sliced)
const str1Sliced = str1.slice(str2Sliced.length)
console.log(str1Sliced)
// const strSliced = str.slice(0, 4)
// console.log(strSliced)