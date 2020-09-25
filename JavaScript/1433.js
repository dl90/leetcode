'use strict'
const test = require('./test.js').test
/*
  Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa.
  A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

  Example 1:
    Input: s1 = "abc", s2 = "xya"
    Output: true
    Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".

  Example 2:
    Input: s1 = "abe", s2 = "acd"
    Output: false
    Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba"
      and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca".
      However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

  Example 3:
    Input: s1 = "leetcodee", s2 = "interview"
    Output: true

  Constraints:
    s1.length == n
    s2.length == n
    1 <= n <= 10^5
    All strings consist of lowercase English letters.

  Sort both strings and then check if one of them can break the other.
 */

var checkIfCanBreak = function (s1, s2) {
  const n = s1.length
  const s1Arr = [...s1].sort()
  const s2Arr = [...s2].sort()

  let s1break = true
  let s2break = true

  // A string s1 can break string s2 if s1[i] >= s2[i]
  for (let i = 0; i < n; i++) {
    // a letter of s1 < s2 => !break
    if (s1Arr[i] < s2Arr[i]) s1break = false
    // a letter of s2 < s1 => !break
    if (s2Arr[i] < s1Arr[i]) s2break = false
  }

  // s1 !break || s2 !break || neither
  // if (!s1break && s2break || !s2break && s1break || s1break && s2break) res = true;
  // s1 !break && s2 !break
  return !(!s1break && !s2break)
}

test(
  checkIfCanBreak('abc', 'xya'), // true
  checkIfCanBreak('abe', 'acd'), // false
  checkIfCanBreak('leetcodee', 'interview') // true
)
