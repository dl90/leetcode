'use strict'
const test = require('../test.js').test
/*
  Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

  Example 1:
    Input: 16
    Output: true

  Example 2:
    Input: 5
    Output: false

  Follow up: Could you solve it without loops/recursion?
*/

var isPowerOfFour = function (num) {
  return num > 0 && Number.isInteger(Math.log(num) / Math.log(4))
}

/*
  base 4 rep of num:
    4 ** any does not include 2 and 3
    includes a 1 but last digit is never 1
*/
function binaryCheck (num) {
  const bin = num.toString(4) // base 4
  if (bin.includes('2') || bin.includes('3')) return false
  return num > 0 && bin.includes('1') && bin.lastIndexOf('1') == bin.indexOf('1')
};

test(
  isPowerOfFour,
  -2147483648, // false
  -240, // false
  64, // true
  16, // true
  6, // false
  2, // false
  1 // true
)

test(
  binaryCheck,
  -2147483648, // false
  -240, // false
  64, // true
  16, // true
  6, // false
  2, // false
  1 // true
)
