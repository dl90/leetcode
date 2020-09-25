'use strict'
const test = require('./test.js').test
/*
  A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

  Example 1:
    Input: S = "ababcbacadefegdehijhklij"
    Output: [9,7,8]
    Explanation:
      The partition is "ababcbaca", "defegde", "hijhklij".
      This is a partition so that each letter appears in at most one part.
      A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

  Note:
    S will have length in range [1, 500].
    S will consist of lowercase English letters ('a' to 'z') only.
*/

var partitionLabels = function (S) {
  if (!S) return []
  const set = new Set(S)
  const res = []
  let start
  let end
  let prevStart = 0
  let prevEnd = 0

  for (const ltr of set) {
    start = S.indexOf(ltr)
    end = S.lastIndexOf(ltr)

    // console.log(ltr, start, end, prevStart, prevEnd)
    if (start <= prevEnd) prevEnd = Math.max(prevEnd, end)
    else {
      res.push(prevEnd - prevStart + 1)
      prevEnd = end
      prevStart = start
    }

    if (prevEnd === S.length - 1) {
      res.push(prevEnd - prevStart + 1)
      break
    }
  }

  return res
}

test(
  partitionLabels,
  "ababcbacadefegdehijhklij", // [9,7,8]
  "abc", // [1, 1, 1]
  "a", // [1]
  "" // []
)
