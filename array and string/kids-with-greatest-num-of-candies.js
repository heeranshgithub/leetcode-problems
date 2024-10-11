// 1431. Kids With the Greatest Number of Candies EASY
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has,
// and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3

var kidsWithCandies = function (candies, extraCandies) {
  const resArr = new Array(candies.length).fill(false)
  let maxCandies = 0
  candies.forEach((candy) => {
    maxCandies = Math.max(maxCandies, candy)
  })

  candies.forEach((candy, index) => {
    let addedCandyCount = candy + extraCandies
    if (addedCandyCount >= maxCandies) resArr[index] = true
  })

  return resArr
}

console.log(kidsWithCandies(candies, extraCandies))
