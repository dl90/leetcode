'use strict'
const test = require('./test.js').test
/*
  Given an integer n. Each number from 1 to n is grouped according to the sum of its digits.
  Return how many groups have the largest size.

  Example 1:
    Input: n = 13
    Output: 4
    Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
    [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

  Example 2:
    Input: n = 2
    Output: 2
    Explanation: There are 2 groups [1], [2] of size 1.

  Example 3:
    Input: n = 15
    Output: 6

  Example 4:
    Input: n = 24
    Output: 5

  Constraints:
    1 <= n <= 10^4
*/

var countLargestGroup = function (n) {
  if (n < 10) return n
  const map = new Map()

  /*
    use map to keep track of count for sum of digit (11 => 1 + 1 sum = 2)
    loop through map search for max and increment count when value == max
    if we find a new max, reset count
  */
  for (let i = 0; i <= n; i++) {
    const digitSum = sum(i)
    map.has(digitSum) ? map.set(digitSum, map.get(digitSum) + 1) : map.set(digitSum, 1)
  }

  let count = 0
  let max = 0
  for (const [k, v] of map) {
    if (v > max) {
      max = v
      count = 0
    }

    if (v == max) count++
  }

  return count

  function sum (num) {
    let sum = 0
    while (num) {
      sum += num % 10
      num = Math.floor(num / 10)
    }
    return sum
  }
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    countLargestGroup(13), // 4
    countLargestGroup(2), // 2
    countLargestGroup(15), // 6
    countLargestGroup(24) // 5
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
