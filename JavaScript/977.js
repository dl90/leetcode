'use strict'
const test = require('./test.js').test
/*
  Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

  Example 1:
    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

  Example 2:
    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]

  Note:
    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    A is sorted in non-decreasing order.
*/

var sortedSquares = function (A) {
  const res = []
  let [i, j] = [0, A.length - 1]

  while (i <= j) Math.abs(A[i]) > Math.abs(A[j]) ? res.push(A[i++]) : res.push(A[j--])
  return res.reverse().map(val => val * val)
}

function noReverse (A) {
  const res = new Array(A.length)
  let [i, j, idx] = [0, A.length - 1, A.length - 1]

  while (i <= j) {
    (A[i] ** 2) < (A[j] ** 2)
      ? res[idx] = A[j--] ** 2
      : res[idx] = A[i++] ** 2
    idx--
  }
  return res
}

test(
  sortedSquares,
  [[-4, -1, 0, 3, 10]], // [0,1,9,16,100]
  [[-7, -3, 2, 3, 11]] // [4,9,9,49,121]
)

test(
  noReverse,
  [[-4, -1, 0, 3, 10]], // [0,1,9,16,100]
  [[-7, -3, 2, 3, 11]] // [4,9,9,49,121]
)
