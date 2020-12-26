'use strict'
const test = require('../test.js').test
/*
  Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

  Example 1:
    Input: "abab"
    Output: True
    Explanation: It's the substring "ab" twice.

  Example 2:
    Input: "aba"
    Output: False

  Example 3:
    Input: "abcabcabcabc"
    Output: True
    Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

var repeatedSubstringPattern = function (s) {
  const len = s.length
  let str
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (s.substring(0, i) === s.substring(i, 2 * i)) {
      str = s.slice(0, i)

      for (let i = 1; i <= Math.floor(len / str.length); i++) {
        if (str.repeat(i) === s) return true
      }
    }
  }

  return false
}

function optimized (s) {
  const len = s.length
  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (s.substring(0, i).repeat(len / i) === s) return true
  }
  return false
}

test(
  repeatedSubstringPattern,
  'babbabbabbabbab', // true;
  'abcabcabcabc', // true
  'ababababab', // true
  'abaababaab', // true
  'aba', // false
  'a' // false;
)

test(
  optimized,
  'babbabbabbabbab', // true;
  'abcabcabcabc', // true
  'ababababab', // true
  'abaababaab', // true
  'aba', // false
  'a' // false;
)
