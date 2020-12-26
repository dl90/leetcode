import test from '../test.js'
/*
  Given a string, find the length of the longest substring without repeating characters.

  Example 1:
    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

  Example 2:
    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

  Example 3:
    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring (s) {
  const seen = new Map()
  let start = 0
  let maxLen = 0

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
    seen.set(s[i], i)
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen)
  }

  return maxLen
}

function window (s) {
  let arr = []
  let max = 0
  let firstIdx
  let lastIdx

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i])
    firstIdx = arr.indexOf(s[i])
    lastIdx = arr.lastIndexOf(s[i])

    if (firstIdx !== lastIdx) arr = arr.slice(firstIdx + 1)
    max = Math.max(max, arr.length)
  }
  return max
};

test(
  window,
  'abcabcbb', // 3
  'aaaaaa', // 1
  'pwwkew', // 3
  '', // 0
  ' ', // 1
  'aab', // 2
  'dvdf', // 3
  'tmmzuxt' // 5
)

test(
  lengthOfLongestSubstring,
  'abcabcbb', // 3
  'aaaaaa', // 1
  'pwwkew', // 3
  '', // 0
  ' ', // 1
  'aab', // 2
  'dvdf', // 3
  'tmmzuxt' // 5
)
