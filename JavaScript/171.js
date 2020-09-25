'use strict'
const test = require('./test.js').test
/*
  Given a column title as appear in an Excel sheet, return its corresponding column number.
  For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

  Example 1:
    Input: "A"
    Output: 1

  Example 2:
    Input: "AB"
    Output: 28

  Example 3:
    Input: "ZY"
    Output: 701

  Constraints:
    1 <= s.length <= 7
    s consists only of uppercase English letters.
    s is between "A" and "FXSHRXW".
*/

var titleToNumber = function (s) {
  let [res, pwr] = [0, 0]
  // charCode A == 65
  for (let i = s.length - 1; i > -1; i--, pwr++) {
    res += (26 ** pwr) * (s.charCodeAt(i) - 64)
  }
  return res
}

test(
  titleToNumber,
  'A', // 1
  'AB', // 28
  'AZ', // 52
  'ZY', // 701
  'FXSHRXW' // 2147483647
)
