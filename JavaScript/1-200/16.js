import test from '../test.js'
/*
  Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers. You may assume that each input would have exactly one solution.

  Example 1:
    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

  Constraints:
    3 <= nums.length <= 10^3
    -10^3 <= nums[i] <= 10^3
    -10^4 <= target <= 10^4
*/

function threeSumClosest (nums, target) {
  nums.sort((a, b) => a - b)
  let diff = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(target - sum) < Math.abs(diff)) diff = target - sum
      if (sum < target) left++
      else right--
    }
  }
  return target - diff
}

test(
  threeSumClosest,
  [[-1, 2, 1, -4], 1] // 2
)
