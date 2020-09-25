'use strict'
const test = require('./test.js').test
/*
  Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

  Example 1:
    Input: [2,3,-2,4]
    Output: 6
    Explanation: [2,3] has the largest product 6.

  Example 2:
    Input: [-2,0,-1]
    Output: 0
    Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

var maxProduct = function (nums) {
  const len = nums.length
  if (!len) return 0
  let [max, cur] = [Number.MIN_SAFE_INTEGER]

  for (let i = 0; i < len; i++) {
    cur = nums[i]
    if (cur > max) max = cur
    for (let j = i + 1; j < len; j++) {
      cur *= nums[j]
      if (cur > max) max = cur
    }
  }
  return max
}

function optimized (nums) {
  const len = nums.length
  let [max, min, res] = [nums[0], nums[0], nums[0]]

  for (let i = 1; i < len; i++) {
    // multiplied by a negative makes big number smaller, small number bigger so we by swapping them
    if (nums[i] < 0) [max, min] = [min, max]

    max = Math.max(nums[i], nums[i] * max)
    min = Math.min(nums[i], nums[i] * min)
    res = Math.max(res, max)
  }
  return res
}

test(
  maxProduct,
  [[2, 3, -2, 4]], // 6
  [[-2, 0, -1]], // 0
  [[-2]] // -2
)

test(
  optimized,
  [[2, 3, -2, 4]], // 6
  [[-2, 0, -1]], // 0
  [[-2]] // -2
)
