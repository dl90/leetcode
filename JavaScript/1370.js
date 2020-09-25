'use strict'
const test = require('./test.js').test
/*
  Given a string s. You should re-order the string using the following algorithm:
    Pick the smallest character from s and append it to the result.
    Pick the smallest character from s which is greater than the last appended character to the result and append it.
    Repeat step 2 until you cannot pick more characters.
    Pick the largest character from s and append it to the result.
    Pick the largest character from s which is smaller than the last appended character to the result and append it.
    Repeat step 5 until you cannot pick more characters.
    Repeat the steps from 1 to 6 until you pick all characters from s.
    In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

  Return the result string after sorting s with this algorithm.

  Example 1:
    Input: s = "aaaabbbbcccc"
    Output: "abccbaabccba"
    Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
    After steps 4, 5 and 6 of the first iteration, result = "abccba"
    First iteration is done. Now s = "aabbcc" and we go back to step 1
    After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
    After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

  Example 2:
    Input: s = "rat"
    Output: "art"
    Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

  Example 3:
    Input: s = "leetcode"
    Output: "cdelotee"

  Example 4:
    Input: s = "ggggggg"
    Output: "ggggggg"

  Example 5:
    Input: s = "spo"
    Output: "ops"

  Constraints:
    1 <= s.length <= 500
    s contains only lower-case English letters.
*/

var sortString = function (s) {
  const len = s.length
  if (len == 1) return s

  const cache = new Map()
  for (let i = 0; i < len; i++) cache.has(s[i]) ? cache.set(s[i], cache.get(s[i]) + 1) : cache.set(s[i], 1)

  if (cache.size == 1) return s
  const order = [...cache.keys()].sort()

  let res = ''
  let j = 0

  let resLen = 0
  let letter

  /*
    order = ["A", "B", "C"]
    1. forward iterate over order and taking out letters
    2. backward iterate over order and take out letters
  */
  while (resLen < len) {
    for (; j < order.length; j++) {
      letter = order[j]
      if (cache.get(letter) > 0) {
        cache.set(letter, cache.get(letter) - 1)
        res += letter
        resLen++
      }
    }
    for (; j > -1; j--) {
      letter = order[j]
      if (cache.get(letter) > 0) {
        cache.set(letter, cache.get(letter) - 1)
        res += letter
        resLen++
      }
    }
  }

  return res
}

test(
  sortString('aaaabbbbcccc'), // "abccbaabccba"
  sortString('ggggggg') // "ggggggg"
)
