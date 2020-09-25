'use strict'
const test = require('./test.js').test
/*
  Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
  After doing so, return the array.

  Example 1:
    Input: arr = [17,18,5,4,6,1]
    Output: [18,6,6,6,1,-1]

  Constraints:
    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5
*/

var replaceElements = function (arr) {
  const len = arr.length
  if (len == 1) return [-1]
  let memoMax = -1

  /*
    [17, 18, 5, 4, 6, 1]
    i | num | memoMax | memoMax | arr
    5   1     -1        1        [17, 18, 5, 4, 6, -1]
    4   6      1        6        [17, 18, 5, 4, 1, -1]
    3   4      6        6        [17, 18, 5, 6, 1, -1]
    2   5      6        6        [17, 18, 6, 6, 1, -1]
    1   18     6        18       [17, 6, 6, 6, 1, -1]
    0   17     18       18       [18, 6, 6, 6, 1, -1]
  */
  for (let i = len - 1; i > -1; i--) {
    const num = arr[i]
    arr[i] = memoMax

    if (memoMax < num) memoMax = num
  }
  return arr
}

test(
  replaceElements([17, 18, 5, 4, 6, 1]) // [18,6,6,6,1,-1]
)
