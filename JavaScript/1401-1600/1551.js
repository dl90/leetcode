'use strict'
const test = require('../test.js').test
/*
  You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).
  In one operation, you can select two indices x and y where 0 <= x, y < n
  and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1).
  The goal is to make all the elements of the array equal.
  It is guaranteed that all the elements of the array can be made equal using some operations.

  Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.

  Example 1:
    Input: n = 3
    Output: 2
    Explanation: arr = [1, 3, 5]
      First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
      In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].

  Example 2:
    Input: n = 6
    Output: 9

  Constraints: 1 <= n <= 10^4
*/

var minOperations = function (n) {
  const half = Math.floor(n / 2)
  const arr = Array.from(new Array(n), (_, idx) => 2 * idx + 1)
  const target = arr.reduce((acc, cur) => acc + cur) / n

  let counter = 0
  for (let i = 0; i < half; i++) {
    if (arr[i] < target) counter += target - arr[i]
  }
  return counter
}

/*
  linear function 2n + 1
  target sum(1 to f(n)) / n

  nth element (last elements value) = 2 * (n - 1) + 1
  target = avg of first and nth element: (2 * (n - 1) + 1 + 1) / 2
  simplify target = (2n - 2 + 2) / 2, which is = n;
*/
function optimized (n) {
  let counter = 0
  for (let i = 1; i < n; i += 2) {
    counter += n - i
  }
  return counter
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    // minOperations(3), // 2
    // minOperations(6), // 9

    optimized(3), // 2
    optimized(6) // 9
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
