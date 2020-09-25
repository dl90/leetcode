'use strict'
const test = require('./test.js').test
/*
  Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

  Examples:
    s = "leetcode"
    return 0.

    s = "loveleetcode"
    return 2.

  Note: You may assume the string contains only lowercase English letters.
*/

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == i && s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i
  }
  return -1
}

test(
  firstUniqChar,
  'leetcode', // 0
  'loveleetcode', // 2
  'cc' // -1
)
