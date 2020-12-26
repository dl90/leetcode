'use strict'
const test = require('../test.js').test
/*
  Given an integer n and an integer start.
  Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
  Return the bitwise XOR of all elements of nums.

  Example 1:
    Input: n = 5, start = 0
    Output: 8
    Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
      Where "^" corresponds to bitwise XOR operator.

  Example 2:
    Input: n = 4, start = 3
    Output: 8
    Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

  Example 3:
    Input: n = 1, start = 7
    Output: 7

  Example 4:
    Input: n = 10, start = 5
    Output: 2

  Constraints:
    1 <= n <= 1000
    0 <= start <= 1000
    n == nums.length
*/

var xorOperation = function (n, start) {
  if (n == 1) return start
  // return new Array(n)
  //   .fill(0)
  //   .map((_, i) => start + 2 * i)
  //   .reduce((accu, cur) => { return accu ^ cur });

  const x = [start]
  for (let i = 1; i < n; i++) x[i] = start += 2
  return x.reduce((accu, cur) => { return accu ^ cur })
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    xorOperation(5, 0), // 8
    xorOperation(4, 3), // 8
    xorOperation(1, 7), // 7
    xorOperation(10, 5) // 2
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
