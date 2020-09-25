import { test } from './test.js'
/*
  You are a professional robber planning to rob houses along a street.
  Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that
  adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given a list of non-negative integers representing the amount of money of each house,
  determine the maximum amount of money you can rob tonight without alerting the police.

  Example 1:
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
                 Total amount you can rob = 1 + 3 = 4.

  Example 2:
    Input: nums = [2,7,9,3,1]
    Output: 12
    Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
                 Total amount you can rob = 2 + 9 + 1 = 12.

  Constraints:
    0 <= nums.length <= 100
    0 <= nums[i] <= 400
*/

var rob = function (nums) {
  const len = nums.length

  /*
    prev is used to store the previous max (one step back) to allow Math.max(prev + nums[i], curr)
    [2, 7, 9, 3, 1]
    [[2, 7, 9]] 3, 1

    [[prev, curr, i]]
    [[2, 7, 2 + 9]]
    if (11 > 7) {
      prev = curr // reassigns prev with curr *so we can eval next Math.max(prev + nums[i], curr)*
      cur = 11 // updates curr with new max
    } else {
      prev = cur // updates prev (no longer adjacent so we are free pick any house after)
    }

    [[7, 11, 3]] 1
    [[10, 11, 1]]
  */

  if (len < 3) return Math.max(nums[0] ?? 0, nums[1] ?? 0)
  let prevMax = nums[0]
  let currMax = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    const comparator = prevMax + nums[i]
    comparator > currMax
      ? [prevMax, currMax] = [currMax, comparator]
      : prevMax = currMax
  }
  return currMax
}

function arr (nums) {
  const len = nums.length
  if (!len) return 0
  if (len === 1) return nums[0]

  const arr = [nums[0]]
  arr[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    arr.push(Math.max(arr[i - 1], nums[i] + arr[i - 2]))
  }
  return arr[len - 1]
}

test(
  rob,
  [[]], // 0
  [[0]], // 0
  [[1, 2, 3, 1]], // 4
  [[2, 7, 9, 3, 1]] // 12
)

test(
  arr,
  [[]], // 0
  [[0]], // 0
  [[1, 2, 3, 1]], // 4
  [[2, 7, 9, 3, 1]] // 12
)
