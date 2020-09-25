'use strict'
const test = require('./test.js').test
/*
  Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

  It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

  Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

  Example 1:
    Input: s = "?zs"
    Output: "azs"
    Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".

  Example 2:
    Input: s = "ubv?w"
    Output: "ubvaw"
    Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".

  Example 3:
    Input: s = "j?qg??b"
    Output: "jaqgacb"

  Example 4:
    Input: s = "??yw?ipkj?"
    Output: "acywaipkja"

  Constraints:
    1 <= s.length <= 100
    s contains only lower case English letters and '?'.
*/

var modifyString = function (s) {
  const [len, match] = [s.length, '?'.charCodeAt(0)]
  let [res, before, after] = ['']

  for (let i = 0; i < len; i++) {
    if (s.charCodeAt(i) !== match) res += s[i]
    else {
      if (res[i - 1]) before = res.charCodeAt(i - 1)
      if (s[i + 1]) after = s.charCodeAt(i + 1)
      for (let i = 97; i <= 122; i++) {
        if (i !== before && i !== after) {
          res += String.fromCharCode(i)
          break
        }
      }
    }
  }
  return res
}

test(
  modifyString,
  '?zs', // 'azs'
  'ubv?w', // 'ubvaw'
  'j?qg??b', // 'jaqgacb'
  '??yw?ipkj?', // 'abywaipkja'
  '', // ''
  '???' // 'aba'
)
