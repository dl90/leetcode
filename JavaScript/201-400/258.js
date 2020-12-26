'use strict'
const test = require('../test.js').test
/*
  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

  Example:
    Input: 38
    Output: 2
    Explanation:
      The process is like: 3 + 8 = 11, 1 + 1 = 2.
      Since 2 has only one digit, return it.

  Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

var addDigits = function (num) {
  while (true) {
    const arr = []
    while (num) {
      arr.push(num % 10)
      num = Math.floor(num / 10)
    }
    num = arr.reduce((acc, cur) => acc + cur, 0)
    if (num < 10) break
  }
  return num
}

function digitalRoot (num) {
  let root = 0
  while (num > 0) {
    root += num % 10
    num = Math.floor(num / 10)

    if (num === 0 && root > 9) {
      num = root
      root = 0
    }
  }
  return root
}

function mod9 (num) {
  if (!num) return 0
  if (!(num % 9)) return 9
  return num % 9
}

test(
  addDigits,
  38, // 2
  123456789 // 9
)

test(
  digitalRoot,
  38, // 2
  123456789 // 9
)

test(
  mod9,
  38, // 2
  123456789 // 9
)
