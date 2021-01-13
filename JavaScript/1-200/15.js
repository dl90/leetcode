import test from '../test.js'
/*
  Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
  Find all unique triplets in the array which gives the sum of zero.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]

  Example 2:
    Input: nums = []
    Output: []

  Example 3:
    Input: nums = [0]
    Output: []

  Constraints:
    0 <= nums.length <= 3000
    -105 <= nums[i] <= 105
*/

function threeSum (nums) {
  const res = []
  if (nums.length < 3) return res
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) right--
      else if (sum < 0) left++
      else {
        res.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        left++
        right--
      }
    }
  }
  return res
}

test(
  threeSum,
  [[-1, 0, 1, 2, -1, -4]], // [[-1,-1,2],[-1,0,1]]
  [[-2, 0, 0, 2, 2]] // [[-2,0,2]]
)
