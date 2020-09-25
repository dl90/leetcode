'use strict'
const test = require('./test.js').test
/*
  In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
  Return the element repeated N times.

  Example 1:
    Input: [1,2,3,3]
    Output: 3

  Example 2:
    Input: [2,1,2,5,3,2]
    Output: 2

  Example 3:
    Input: [5,1,5,2,5,3,5,4]
    Output: 5

  Note:
    4 <= A.length <= 10000
    0 <= A[i] < 10000
    A.length is even
*/

var repeatedNTimes = function (A) {
  /*
    look for any duplicate values b/c:
    size = 2N, there are N+1 unique elements
    half is unique, other half is the same element
  */
  const set = new Set()
  for (const val of A) {
    if (set.has(val)) return val
    set.add(val)
  }
}

test(
  repeatedNTimes,
  [[1, 2, 3, 3]], // 3
  [[9, 5, 6, 9]], // 9
  [[5, 1, 5, 2, 5, 3, 5, 4]] // 5
)
