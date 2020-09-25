import { test } from './test.js'
/*
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
    Input: ["flower","flow","flight"]
    Output: "fl"

  Example 2:
    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

  Note: All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function (strs) {
  const len = strs.length
  if (len === 0 || strs[0] === '') return ''
  if (len === 1) return strs[0]
  let compare = ''
  let temp

  for (let i = 0; i < strs[0].length; i++) {
    temp = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== temp) return compare
    }
    compare += temp
  }
}

test(
  longestCommonPrefix,
  [['flower', 'flow', 'flight']], // "fl"
  [['a']] // "a"
)
