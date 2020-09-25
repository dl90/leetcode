'use strict'
const test = require('./test.js').test
/*
  Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
  A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
    0 <= i < j < k < arr.length
    |arr[i] - arr[j]| <= a
    |arr[j] - arr[k]| <= b
    |arr[i] - arr[k]| <= c
    Where |x| denotes the absolute value of x.

  Return the number of good triplets.

  Example 1:
    Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
    Output: 4
    Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

  Example 2:
    Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
    Output: 0
    Explanation: No triplet satisfies all conditions.

  Constraints:
    3 <= arr.length <= 100
    0 <= arr[i] <= 1000
    0 <= a, b, c <= 1000
*/

var countGoodTriplets = function (arr, a, b, c) {
  const len = arr.length
  let _a; let _b; let _c; let res = 0
  for (let i = 0; i < len; i++) {
    _a = arr[i]
    for (let j = i + 1; j < len; j++) {
      _b = arr[j]
      if (Math.abs(_a - _b) > a) continue
      for (let k = j + 1; k < len; k++) {
        _c = arr[k]
        if (Math.abs(_b - _c) > b) continue
        if (Math.abs(_a - _c) > c) continue
        res++
      }
    }
  }
  return res
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3), // 4
    countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1) // 0
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
