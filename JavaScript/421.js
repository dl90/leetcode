import { test } from './test.js'
/*
  Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.
  Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.
  Could you do this in O(n) runtime?

  Example:
    Input: [3, 10, 5, 25, 2, 8]
    Output: 28
    Explanation: The maximum result is 5 ^ 25 = 28.
*/

var findMaximumXOR = function (nums) {
  const len = nums.length
  let max = 0

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const val = nums[i] ^ nums[j]
      if (val > max) max = val
    }
  }
  return max
}

// @TODO O(n) https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/discuss/91049/Java-O(n)-solution-using-bit-manipulation-and-HashMap

test(
  findMaximumXOR,
  [[3, 10, 5, 25, 2, 8]], // 28
  [[0]] // 0
)
