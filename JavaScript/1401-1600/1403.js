'use strict'
const test = require('../test.js').test
/*
  Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.
  If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements.
  A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.
  Note that the solution with the given constraints is guaranteed to be unique.
  Also return the answer sorted in non-increasing order.

  Example 1:
    Input: nums = [4,3,10,9,8]
    Output: [10,9]
    Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.

  Example 2:
    Input: nums = [4,4,7,6,7]
    Output: [7,7,6]
    Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6).
      Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.

  Example 3:
    Input: nums = [6]
    Output: [6]

  Constraints:
    1 <= nums.length <= 500
    1 <= nums[i] <= 100
*/

function minSubsequence (nums) {
  if (nums.length == 1) return nums
  const sort = nums.sort((a, b) => a - b)
  const sum = sort.reduce((acc, cur) => acc + cur)
  const res = []
  let compare = 0

  /*
    sort the input in ascending order
    track compare value by adding pop element from sorted array
    add the element to return array
    if compare is greater than difference, break
  */
  while (true) {
    const ele = sort.pop()
    res.push(ele)
    compare += ele

    if (compare > (sum - compare)) break
  }

  return res
};

test(
  minSubsequence([4, 3, 10, 9, 8]), // [10, 9]
  minSubsequence([4, 4, 7, 6, 7]), // [7,7,6]
  minSubsequence([6]) // [6]
)
