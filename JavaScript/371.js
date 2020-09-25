'use strict'
const test = require('./test.js').test
/*
  Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

  Example 1:
    Input: a = 1, b = 2
    Output: 3

  Example 2:
    Input: a = -2, b = 3
    Output: 1

  https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary%3A-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently
*/

var getSum = function (a, b) {
  if (!a) return b
  if (!b) return a

  let carry
  while (b) {
    carry = a & b
    a = a ^ b
    // console.log((a >>> 0).toString(2), (carry >>> 0).toString(2));
    b = carry << 1
  }
  return a
}

test(
  getSum,
  [1, 2], // 3
  [-2, 3], // 1
  [899999999, 1] // 900000000
)
