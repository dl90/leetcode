import { test } from './test.js'
/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

var twoSum = function (nums, target) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

function cache (nums, target) {
  const len = nums.length
  const cache = new Map()
  let val
  let otherHalf

  for (let i = 0; i < len; i++) {
    val = nums[i]
    otherHalf = target - val
    if (cache.has(otherHalf) && cache.get(otherHalf) !== i) return [cache.get(otherHalf), i]
    cache.set(val, i)
  }
}

const arr = Array.from(Array(100000), (_, x) => x + 1)
arr.push(999999)

test(
  twoSum,
  [[2, 7, 11, 15], 9], // [0, 1]
  [arr, 1099899] // [ 99899, 100000 ]
)

test(
  cache,
  [[2, 7, 11, 15], 9], // [0, 1]
  [arr, 1099899] // [ 99899, 100000 ]
)
