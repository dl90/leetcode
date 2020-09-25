'use strict'
const test = require('./test.js').test
/*
  Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
  Find the kth positive integer that is missing from this array.

  Example 1:
    Input: arr = [2,3,4,7,11], k = 5
    Output: 9
    Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

  Example 2:
    Input: arr = [1,2,3,4], k = 2
    Output: 6
    Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

  Constraints:
    1 <= arr.length <= 1000
    1 <= arr[i] <= 1000
    1 <= k <= 1000
    arr[i] < arr[j] for 1 <= i < j <= arr.length
*/

var findKthPositive = function (arr, k) {
  const missing = []
  const len = arr.length + k

  /*
    arr = [2,3,4,7,11], k = 5
    arr.length = 5
    At max we only need to check up to len + k:

      say arr = [10, 100, 1111, 22222, 33333], its missing [1, 2, 3, 4, 5]
      we only need to check the kth missing element, which would be 5.

      say arr = [1, 2, 3, 4, 5], its missing [6, 7, 8, 9, 10]
      5th ele = 10;
  */
  for (let i = 0, j = 1; j <= len; j++) {
    arr[i] != j ? missing.push(j) : i++
    if (missing.length == k) return missing.pop()
  }
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    findKthPositive([2, 3, 4, 7, 11], 5), // 9
    findKthPositive([1, 2, 3, 4], 2) // 6
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
