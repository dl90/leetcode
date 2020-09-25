'use strict'
const test = require('./test.js').test
/*
  Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
  Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

    If S[i] == "I", then A[i] < A[i+1]
    If S[i] == "D", then A[i] > A[i+1]

  Example 1:
    Input: "IDID"
    Output: [0,4,1,3,2]

  Example 2:
    Input: "III"
    Output: [0,1,2,3]

  Example 3:
    Input: "DDI"
    Output: [3,2,0,1]

  Note:
    1 <= S.length <= 10000
    S only contains characters "I" or "D".
*/

var diStringMatch = function (S) {
  const len = S.length
  const res = []

  /*
    to avoid re-swapping elements (ie how Array.sort works)
    we set the values based on existing min/max
    this way we know elements following these values will be guaranteed to be less/greater

    [0, 1, 2, 3, 4]
    "IDID"

    "I" [0]
    "D" [0, 4]
    "I" [0, 4, 1]
    "D" [0, 4, 1, 3]
    add the last element [0, 4, 1, 3, 2]

    last element (start === end)
  */

  for (let i = 0, start = 0, end = len; i <= len; i++) {
    S[i] === 'I' ? res.push(start++) : res.push(end--)
  }
  return res
}

test(
  diStringMatch,
  'IDID', // [0,4,1,3,2]
  'III', // [0,1,2,3]
  'DDI' // [3,2,0,1]
)
