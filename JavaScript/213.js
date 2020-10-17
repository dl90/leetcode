import { test } from './test.js'
/*
  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  Example 1:
    Input: nums = [2,3,2]
    Output: 3
    Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

  Example 2:
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.

  Example 3:
    Input: nums = [0]
    Output: 0

  Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000

  Since House[1] and House[n] are adjacent, they cannot be robbed together. Therefore, the problem becomes to rob either House[1]-House[n-1] or House[2]-House[n], depending on which choice offers more money. Now the problem has degenerated to the House Robber, which is already been solved.
*/

var rob = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(...nums)

  const arr1 = [nums[0], Math.max(nums[0], nums[1])]
  const arr2 = [0, nums[1]]

  for (let i = 2; i < len; i++) {
    if (i !== len - 1) arr1[i] = Math.max(arr1[i - 1], arr1[i - 2] + nums[i])
    arr2[i] = Math.max(arr2[i - 1], arr2[i - 2] + nums[i])
  }
  return Math.max(arr1.pop(), arr2.pop())
}

test(
  rob,
  [[2, 3, 2]], // 3
  [[1, 2, 3, 1]], // 4
  [[0]], // 0
  [[2, 7, 9, 3, 1]] // 11
)
