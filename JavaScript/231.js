'use strict'
const test = require('./test.js').test
/*
  Given an integer, write a function to determine if it is a power of two.

  Example 1:
    Input: 1
    Output: true
    Explanation: 2^0 = 1

  Example 2:
    Input: 16
    Output: true
    Explanation: 2^4 = 16

  Example 3:
    Input: 218
    Output: false
*/

var isPowerOfTwo = function (n) {
  const regex = RegExp('^10*$')
  return regex.test(n.toString(2))
}

function bitwise (n) {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}

test(
  isPowerOfTwo,
  1, // true
  16, // true
  218 // false
)

test(
  bitwise,
  1, // true
  16, // true
  218 // false
)
