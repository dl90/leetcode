'use strict'
const test = require('../test.js').test
/*
  We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
  Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

  Example:
    Input: 28
    Output: True
    Explanation: 28 = 1 + 2 + 4 + 7 + 14

  Note: The input number n will not exceed 100,000,000. (1e8)
*/

var checkPerfectNumber = function (num) {
  if (num == 1 || num % 2 > 0) return false

  let sum = 1
  for (let i = 2, j = num - 1; i <= num / 2; i++, j--) {
    if (num % i == 0) sum += i
    if (num % j == 0) sum += j
    if (sum > num) return false
  }

  return sum === num
}

test(
  checkPerfectNumber,
  28, // true;
  100000000 // false;
)
