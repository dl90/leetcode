import { test } from '../test.js'
/*
  Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

  Note: The algorithm should run in linear time and in O(1) space.

  Example 1:
    Input: [3,2,3]
    Output: [3]

  Example 2:
    Input: [1,1,1,3,3,2,2,2]
    Output: [1,2]
*/

var majorityElement = function (nums) {
  let candidate1
  let candidate2
  let count1 = 0
  let count2 = 0

  for (const num of nums) {
    if (candidate1 !== null && candidate1 === num) count1++
    else if (candidate2 !== null && candidate2 === num) count2++
    else if (count1 === 0) {
      candidate1 = num
      count1++
    } else if (count2 === 0) {
      candidate2 = num
      count2++
    } else {
      count1--
      count2--
    }
  }

  const res = []
  count1 = 0
  count2 = 0
  for (const num of nums) {
    if (candidate1 !== null && candidate1 === num) count1++
    else if (candidate2 !== null && candidate2 === num) count2++
  }

  const ratio = nums.length / 3
  if (count1 > ratio) res.push(candidate1)
  if (count2 > ratio) res.push(candidate2)

  return res
}

test(
  majorityElement,
  [[3, 2, 3]], // [3]
  [[1, 1, 1, 3, 3, 2, 2, 2]], // [1.2]
  [[0, 0, 0]] // [0]
)
