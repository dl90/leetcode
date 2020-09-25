import { test } from './test.js'
/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Example:
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

  Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

var maxSubArray = function (nums) {
  let max = 0
  let cur = 0

  for (const num of nums) {
    if (cur < 0) cur = 0
    cur += num
    max = Math.max(max, cur)
  }
  return max
}

function dp (nums) {
  const arr = [nums[0]]
  let max = 0

  for (let i = 1; i < nums.length; i++) {
    arr[i - 1] <= 0
      ? arr[i] = nums[i]
      : arr[i] = nums[i] + arr[i - 1]
    if (arr[i] > max) max = arr[i]
  }
  return max
};

test(
  maxSubArray,
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], // 6
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, -10]] // 45
)

test(
  dp,
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], // 6
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, -10]] // 45
)
