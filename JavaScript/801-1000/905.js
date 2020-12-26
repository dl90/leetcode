'use strict'
const test = require('../test.js').test
/*
  Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
  You may return any answer array that satisfies this condition.

  Example 1:
    Input: [3,1,2,4]
    Output: [2,4,3,1]
    The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

  Note:
    1 <= A.length <= 5000
    0 <= A[i] <= 5000
*/

var sortArrayByParity = function (A) {
  if (A.length < 2) return A
  let front = 0
  let back = A.length - 1

  while (front < back) {
    if (A[front] % 2) {
      if (!(A[back] % 2)) {
        [A[front], A[back]] = [A[back], A[front]]
        front++
      }
      back--
    } else front++
  }
  return A
}

function filterConcat (A) {
  return A.filter(val => !(val % 2)).concat(A.filter(val => val % 2))
}

test(
  sortArrayByParity,
  [[3, 1, 2, 4]], // [4,2,1,3]
  [Array.from(new Array(10000), (_, idx) => idx + 1)]
)

test(
  filterConcat,
  [[3, 1, 2, 4]], // [4,2,1,3]
  [Array.from(new Array(10000), (_, idx) => idx + 1)]
)
