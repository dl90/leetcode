'use strict'
const test = require('./test.js').test
/*
  Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
  You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.
  That is, no two adjacent characters have the same type.
  Return the reformatted string or return an empty string if it is impossible to reformat the string.

  Example 1:
    Input: s = "a0b1c2"
    Output: "0a1b2c"
    Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

  Example 2:
    Input: s = "leetcode"
    Output: ""
    Explanation: "leetcode" has only characters so we cannot separate them by digits.

  Example 3:
    Input: s = "1229857369"
    Output: ""
    Explanation: "1229857369" has only digits so we cannot separate them by characters.

  Example 4:
    Input: s = "covid2019"
    Output: "c2o0v1i9d"

  Example 5:
    Input: s = "ab123"
    Output: "1a2b3"

  Constraints:
    1 <= s.length <= 500
    s consists of only lowercase English letters and/or digits.
*/

var reformat = function (s) {
  const str = []
  const num = []

  // populate str && num array
  for (let i = 0; i < s.length; i++) isNaN(Number(s[i])) ? str.push(s[i]) : num.push(s[i])

  const strLen = str.length
  const numLen = num.length
  // console.log(strLen, numLen);
  let res = ''
  if (Math.abs(strLen - numLen) <= 1) {
    if (strLen > numLen) {
      for (let i = 0; i < strLen; i++) {
        res += str[i]
        if (num[i]) res += num[i]
      }
    } else if (numLen > strLen) {
      for (let i = 0; i < numLen; i++) {
        res += num[i]
        if (str[i]) res += str[i]
      }
    } else {
      for (let i = 0; i < strLen; i++) {
        res += num[i]
        res += str[i]
      }
    }
  }

  return res
}

test(
  reformat('a0b1c2'), // "0a1b2c"
  reformat('leetcode'), // ""
  reformat('1229857369'), // ""
  reformat('covid2019') // ""
)
