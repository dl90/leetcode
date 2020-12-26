'use strict'
const test = require('../test.js').test
/*
  Given an array of 4 digits, return the largest 24 hour time that can be made.
  The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
  Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

  Example 1:
    Input: [1,2,3,4]
    Output: "23:41"

  Example 2:
    Input: [5,5,5,5]
    Output: ""

  Note:
    A.length == 4
    0 <= A[i] <= 9
*/

var largestTimeFromDigits = function (A) {
  const nums = []; let x
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue
      for (let k = 0; k < 4; k++) {
        if (j === k) continue
        if ((A[i] <= 2 && A[j] < 4 && A[k] < 6) || (A[i] < 2 && A[k] < 6)) {
          x = 6 - (i + j + k)
          nums.push([A[i], A[j], A[k], A[x]])
        }
      }
    }
  }

  const max = Math.max(...nums.map(arr => arr.join('')))
  if (max === -Infinity) return ''
  x = max.toString().padStart(4, '0')
  const x1 = x.slice(0, 2)
  const x2 = x.slice(2)
  return `${x1}:${x2}`
}

test(
  largestTimeFromDigits,
  [[1, 2, 3, 4]], // "23:41"
  [[5, 5, 5, 5]], // ""
  [[2, 0, 6, 6]] // "06:26"
)
