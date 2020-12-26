'use strict'
const test = require('../test.js').test
/*
  Given an array of integers, find out whether there are two distinct indices i and j in the array such that
  the absolute difference between nums[i] and nums[j] is at most t and
  the absolute difference between i and j is at most k.

  Example 1:
    Input: nums = [1,2,3,1], k = 3, t = 0
    Output: true

  Example 2:
    Input: nums = [1,0,1,1], k = 1, t = 2
    Output: true

  Example 3:
    Input: nums = [1,5,9,1,5,9], k = 2, t = 3
    Output: false
*/

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const map = new Map()
  nums.forEach((val, idx) => map.set(idx, val))

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (j >= nums.length) continue
      if (Math.abs(map.get(i) - map.get(j)) <= t) return true
    }
  }
  return false
}

function optimized (nums, k, t) {
  const map = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val)

  let l = 0
  let r = 1
  let diff, range

  while (r < map.length) {
    diff = Math.abs(map[r].val - map[l].val)
    range = Math.abs(map[r].idx - map[l].idx)

    if (diff <= t && range <= k) return true
    else if (diff > t) l++
    else if (range > k) r++

    if (l === r) r++
  }

  return false
}

test(
  containsNearbyAlmostDuplicate,
  [[1, 2, 3, 1], 3, 0], // true
  [[1, 5, 9, 1, 5, 9], 2, 3], // false
  [[1, 3, 6, 2], 1, 2], // true
  [[2, 2], 3, 0] // true
)

test(
  optimized,
  [[1, 2, 3, 1], 3, 0], // true
  [[1, 5, 9, 1, 5, 9], 2, 3], // false
  [[1, 3, 6, 2], 1, 2], // true
  [[2, 2], 3, 0] // true
)
