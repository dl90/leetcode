'use strict'
const test = require('./test.js').test
/*
  Given an integer n, return any array containing n unique integers such that they add up to 0.

  Example 1:
    Input: n = 5
    Output: [-7,-1,1,3,4]
    Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

  Example 2:
    Input: n = 3
    Output: [-1,0,1]

  Example 3:
    Input: n = 1
    Output: [0]

  Constraints:
    1 <= n <= 1000

  Return an array where the values are symmetric. (+x , -x).
  If n is odd, append value 0 in your returned array.
*/

var sumZero = function (n) {
  const arr = []

  if (n % 2 == 1) {
    arr.push(0)
    n--
  }

  n = n / 2 + 1
  for (let i = 1; i < n; i++) arr.push(i, -i)

  return arr
}

test(
  sumZero(5),
  sumZero(3),
  sumZero(1)
)
