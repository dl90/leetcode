'use strict'
const test = require('./test.js').test
/*
  Given two integer arrays of equal length target and arr.
  In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
  Return True if you can make arr equal to target, or False otherwise.

  Example 1:
    Input: target = [1,2,3,4], arr = [2,4,1,3]
    Output: true
    Explanation: You can follow the next steps to convert arr to target:
    1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
    2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
    3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
    There are multiple ways to convert arr to target, this is not the only way to do so.

  Example 2:
    Input: target = [7], arr = [7]
    Output: true
    Explanation: arr is equal to target without any reverses.

  Example 3:
    Input: target = [1,12], arr = [12,1]
    Output: true

  Example 4:
    Input: target = [3,7,9], arr = [3,7,11]
    Output: false
    Explanation: arr doesn't have value 9 and it can never be converted to target.

  Example 5:
    Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
    Output: true

  Constraints:
    target.length == arr.length
    1 <= target.length <= 1000
    1 <= target[i] <= 1000
    1 <= arr[i] <= 1000
*/

var canBeEqual = function (target, arr) {
  const len = target.length
  const sortedTarget = target.sort((a, b) => a - b)
  const sortedArr = arr.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    if (sortedTarget[i] !== sortedArr[i]) return false
  }
  return true
}

const arr1 = Array.from(Array(100000), (_, x) => x + 1)
const arr2 = [...arr1]
arr1.push(999999);

(() => {
  const hrStart = process.hrtime()

  console.log(
    canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]), // true
    canBeEqual([3, 7, 9], [3, 7, 11]), // false
    canBeEqual(arr1, arr2) // true
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
