'use strict'
const test = require('../test.js').test
/*
  Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
  Return a list of all powerful integers that have value less than or equal to bound.

  You may return the answer in any order.  In your answer, each value should occur at most once.

  Example 1:
    Input: x = 2, y = 3, bound = 10
    Output: [2,3,4,5,7,9,10]
    Explanation:
      2 = 2^0 + 3^0
      3 = 2^1 + 3^0
      4 = 2^0 + 3^1
      5 = 2^1 + 3^1
      7 = 2^2 + 3^1
      9 = 2^3 + 3^0
      10 = 2^0 + 3^2

  Example 2:
    Input: x = 3, y = 5, bound = 15
    Output: [2,4,6,8,10,14]

  Note:
    1 <= x <= 100
    1 <= y <= 100
    0 <= bound <= 10^6
*/

var powerfulIntegers = function (x, y, bound) {
  const set = new Set()
  const logBound = Math.log(bound)
  const xMax = x > 1 ? parseInt(logBound / Math.log(x)) : 1
  const yMax = y > 1 ? parseInt(logBound / Math.log(y)) : 1

  let val
  for (let i = 0; i <= xMax; i++) {
    for (let j = 0; j <= yMax; j++) {
      val = (x ** i) + (y ** j)
      if (val <= bound) set.add(val)
    }
  }
  return [...set]
}

test(
  powerfulIntegers,
  [2, 3, 10], // [2,4,10,3,5,7,9]
  [3, 5, 15] // [2,6,4,8,10,14]
)
