import { test } from './test.js'
/*
  Given an unsorted integer array, find the smallest missing positive integer.

  Example 1:
    Input: [1,2,0]
    Output: 3

  Example 2:
    Input: [3,4,-1,1]
    Output: 2

  Example 3:
    Input: [7,8,9,11,12]
    Output: 1

  Follow up: Your algorithm should run in O(n) time and uses constant extra space
*/

var firstMissingPositive = function (nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    } else {
      i++
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return i + 1
}

function set (nums) {
  const set = new Set(nums) // 0(n) space
  for (let i = 1; i <= set.size; i++) {
    if (!set.has(i)) return i
  }
}

test(
  firstMissingPositive,
  [[1, 2, 0]], // 3
  [[3, 4, -1, 1]], // 2
  [[7, 8, 9, 11, 12]] // 1
)

test(
  set,
  [[1, 2, 0]], // 3
  [[3, 4, -1, 1]], // 2
  [[7, 8, 9, 11, 12]] // 1
)
