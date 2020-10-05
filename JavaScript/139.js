import { test } from './test.js'
/*
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note:
    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

  Example 1:
    Input: s = "leetcode", wordDict = ["leet", "code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".

  Example 2:
    Input: s = "applepenapple", wordDict = ["apple", "pen"]
    Output: true
    Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
      Note that you are allowed to reuse a dictionary word.

  Example 3:
    Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
    Output: false
*/

// @TODO
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict)
  const wordLens = new Set(wordDict.map((word) => word.length))
  const starts = new Set([0])
  for (const start of starts) {
    for (const len of wordLens) {
      if (words.has(s.slice(start, start + len))) {
        starts.add(start + len)
      }
    }
  }
  return starts.has(s.length)
}

test(
  wordBreak,
  ['leetcode', ['leet', 'code']]
)
