'use strict'
const test = require('../test.js').test
/*
  Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
  Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

  Example 1:
    Input: arr = [3,5,1]
    Output: true
    Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

  Example 2:
    Input: arr = [1,2,4]
    Output: false
    Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

  Constraints:
    2 <= arr.length <= 1000
    -10^6 <= arr[i] <= 10^6
*/

var canMakeArithmeticProgression = function (arr) {
  const len = arr.length
  if (len == 2) return true

  arr.sort((a, b) => a - b)
  let [i, j] = [0, 1]
  const diff = arr[j] - arr[i]
  for (; j < len;) {
    if (arr[j] - arr[i] != diff) return false
    i++
    j++
  }
  return true
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    canMakeArithmeticProgression([3, 5, 1]), // true
    canMakeArithmeticProgression([1, 2, 4]) // false
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
