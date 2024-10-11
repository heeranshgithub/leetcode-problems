// 735. Asteroid Collision MEDIUM
// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
// Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size,
// both will explode. Two asteroids moving in the same direction will never meet.
// https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroids0 = [5, 10, -5] // -> [5, 10]
const asteroids1 = [8, -8] // -> [0]
const asteroids2 = [10, 2, -5] // -> [10]
const asteroids3 = [-2, -1, 1, 2] // -> [-2,-1,1,2]
const asteroids4 = [2, 1, 3, -5] // -> [-5]
const asteroids5 = [-2, -2, 1, -2] // -> [-2, -2, -2]
const asteroids6 = [-2, -2, 1, -1] // -> [-2,-2]
 
const asteroidCollision = (asteroids) => {
    const stack = []
    
    return stack
}