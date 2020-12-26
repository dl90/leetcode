import { test } from '../test.js'
/*
  Given a binary array, find the maximum number of consecutive 1s in this array.

  Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3
    Explanation:
      The first two digits or the last three digits are consecutive 1s.
      The maximum number of consecutive 1s is 3.

  Note:
    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
*/

var findMaxConsecutiveOnes = function (nums) {
  let res = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) count++
    else count = 0
    if (count > res) res = count
  }
  return res
}

function window (nums) {
  const set = new Set()
  let start = -1
  let end
  for (let i = 0; i < nums.length; i++) {
    if (start < 0 && nums[i]) start = i
    if (start >= 0 && nums[i]) end = i
    if (!nums[i] || i === nums.length - 1) {
      set.add(end - start + 1)
      start = -1
    }
  }
  return Math.max(...set)
}

test(
  findMaxConsecutiveOnes,
  [[1, 1, 0, 1, 1, 1]], // 3
  [[1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]] // 6
)

test(
  window,
  [[1, 1, 0, 1, 1, 1]], // 3
  [[1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]] // 6
)
