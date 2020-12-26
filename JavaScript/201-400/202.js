'use strict'
const test = require('../test.js').test
/*
  Write an algorithm to determine if a number n is "happy".

  A happy number is a number defined by the following process:
    Starting with any positive integer, replace the number by the sum of the squares of its digits, and
    repeat the process until the number equals 1 (where it will stay),
    or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

  Return True if n is a happy number, and False if not.

  Example:
    Input: 19
    Output: true
    Explanation:
      1^2 + 9^2 = 82
      8^2 + 2^2 = 68
      6^2 + 8^2 = 100
      1^2 + 0^2 = 1
*/

var isHappy = function (n) {
  if (n < 1) return false
  const set = new Set()
  const digits = []

  function num (n) {
    while (n) {
      digits.push(n % 10)
      n = Math.floor(n / 10)
    }
  }

  function sum () {
    let sum = 0
    while (digits.length) {
      sum += digits.pop() ** 2
    }
    return sum
  }

  while (n) {
    num(n)
    n = sum()
    if (set.has(n)) return false
    set.add(n)
    if (n === 1) return true
  }
}

test(
  isHappy,
  19, // true
  0, // false
  1234567 // false
)
