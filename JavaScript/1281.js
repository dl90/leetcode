'use strict'
const test = require('./test.js').test
/*
  Given an integer number n, return the difference between the product of its digits and the sum of its digits.

  Example 1:
    Input: n = 234
    Output: 15
    Explanation:
      Product of digits = 2 * 3 * 4 = 24
      Sum of digits = 2 + 3 + 4 = 9
      Result = 24 - 9 = 15

  Example 2:
    Input: n = 4421
    Output: 21
    Explanation:
      Product of digits = 4 * 4 * 2 * 1 = 32
      Sum of digits = 4 + 4 + 2 + 1 = 11
      Result = 32 - 11 = 21

  Constraints:
    1 <= n <= 10^5
*/

var subtractProductAndSum = function (n) {
  if (n < 9) return 0
  const arr = []

  while (n > 0) {
    arr.push(n % 10)
    n = Math.floor(n / 10)
  }

  let prod = 1
  let sum = 0
  const len = arr.length - 1
  for (let i = len; i > -1; i--) {
    prod *= arr[i]
    sum += arr[i]
  }
  return prod - sum
}

test(
  subtractProductAndSum(234), // 15
  subtractProductAndSum(4421) // 21
)
