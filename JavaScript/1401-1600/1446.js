'use strict'
const test = require('../test.js').test
/*
  Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
  Return the power of the string.

  Example 1:
    Input: s = "leetcode"
    Output: 2
    Explanation: The substring "ee" is of length 2 with the character 'e' only.

  Example 2:
    Input: s = "abbcccddddeeeeedcba"
    Output: 5
    Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

  Example 3:
    Input: s = "triplepillooooow"
    Output: 5

  Example 4:
    Input: s = "hooraaaaaaaaaaay"
    Output: 11

  Example 5:
    Input: s = "tourist"
    Output: 1

  Constraints:
    1 <= s.length <= 500
    s contains only lowercase English letters.
*/

var maxPower = function (s) {
  const len = s.length
  if (len == 1) return 1
  let cur = 1
  let power = 1
  let letter = s[0]

  /*
    leetcode
    i | cur | power | letter |
        1      1       "l"
    1   1      1       "e"
    2   2      2       "e"
    3   1      2       "t"
    4   1      2       "c"
    5   1      2       "o"
    6   1      2       "d"
    7   1      2       "e"

    1. assigns starting values (cur = 1; power = 1; letter = s[0])
    2. iterate over rest of letters
        if its the same letter:
          increment cur;
          check cur against power && assign if greater
        else:
          reset cur and letter
  */
  for (let i = 1; i < len; i++) {
    if (s[i] == letter) {
      cur++
      if (cur > power) power = cur
    } else {
      cur = 1
      letter = s[i]
    }
  }

  return power
}

test(
  maxPower('leetcode'), // 2
  maxPower('abbcccddddeeeeedcba'), // 5
  maxPower('triplepillooooow'), // 5
  maxPower('hooraaaaaaaaaaay'), // 11
  maxPower('tourist') // 1
)
