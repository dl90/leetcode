'use strict'
const test = require('../test.js').test
/*
  Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

  Example 1:
    Input: nums = [3,4,5,2]
    Output: 12
    Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

  Example 2:
    Input: nums = [1,5,4,5]
    Output: 16
    Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

  Example 3:
    Input: nums = [3,7]
    Output: 12

  Constraints:
    2 <= nums.length <= 500
    1 <= nums[i] <= 10^3
*/

var maxProduct = function (nums) {
  if (true) {
    const sort = nums.sort((a, b) => b - a)
    return (sort[0] - 1) * (sort[1] - 1)
  } else {
    let check = 0
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const val = (nums[i] - 1) * (nums[j] - 1)
        if (val > check) check = val
      }
    }
    return check
  }
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    maxProduct([3, 4, 5, 2]), // 12
    maxProduct([1, 5, 4, 5]), // 16
    maxProduct([3, 7]) // 12
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
