'use strict'
const test = require('./test.js').test
/*
  Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
  Find all the elements that appear twice in this array.
  Could you do it without extra space and in O(n) runtime?

  Example:
    Input: [4,3,2,7,8,2,3,1]
    Output: [2,3]
*/

var findDuplicates = function (nums) {
  const res = []
  let i

  nums.forEach(val => {
    i = Math.abs(val) - 1
    // seen the number before
    if (nums[i] < 0) res.push(i + 1)
    nums[i] = (nums[i] ?? 1) * -1
  })
  return res
}

test(
  findDuplicates,
  [[4, 3, 2, 7, 8, 2, 3, 1]], // [2,3]
  [[4, 3, 2, 2, 2, 7, 8, 2, 3, 1]], // [2, 2, 3] double neg flipped
  [[10, 1, 1]] // [1]
)
