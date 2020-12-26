import { test } from '../test.js'
/*
  You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

  Notice that x does not have to be an element in nums.
  Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

  Example 1:
    Input: nums = [3,5]
    Output: 2
    Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

  Example 2:
    Input: nums = [0,0]
    Output: -1
    Explanation: No numbers fit the criteria for x.
      If x = 0, there should be 0 numbers >= x, but there are 2.
      If x = 1, there should be 1 number >= x, but there are 0.
      If x = 2, there should be 2 numbers >= x, but there are 0.
      x cannot be greater since there are only 2 numbers in nums.

  Example 3:
    Input: nums = [0,4,3,0,4]
    Output: 3
    Explanation: There are 3 values that are greater than or equal to 3.

  Example 4:
    Input: nums = [3,6,7,7,0]
    Output: -1

  Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000
*/

var specialArray = function (nums) {
  const arr = []
  for (let i = 1; i <= nums.length; i++) {
    let count = 0
    for (const num of nums) {
      if (num >= i) count++
    }
    if (count === i) arr.push(count)
  }
  return arr.length > 0 ? Math.max(...arr) : -1
}

function countSort (nums) {
  const arr = new Uint8Array(10001)
  let max = 0
  for (const num of nums) {
    arr[num]++
    if (num > max) max = num
  }

  let count = 0
  for (let i = max; i >= 0; i--) {
    count += arr[i]
    if (i === count) return i
  }
  return -1
}

test(
  specialArray,
  [[3, 5]], // 2
  [[0, 0]], // -1
  [[0, 4, 3, 0, 4]], // 3
  [[3, 6, 7, 7, 0]] // -1
)

test(
  countSort,
  [[3, 5]], // 2
  [[0, 0]], // -1
  [[0, 4, 3, 0, 4]], // 3
  [[3, 6, 7, 7, 0]] // -1
)
