'use strict'
const test = require('./test.js').test
/*
  Given a pattern and a string str, find if str follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

  Example 1:
    Input: pattern = "abba", str = "dog cat cat dog"
    Output: true

  Example 2:
    Input:pattern = "abba", str = "dog cat cat fish"
    Output: false

  Example 3:
    Input: pattern = "aaaa", str = "dog cat cat dog"
    Output: false

  Example 4:
    Input: pattern = "abba", str = "dog dog dog dog"
    Output: false

  Notes: You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
*/

var wordPattern = function (pattern, str) {
  const strArr = str.split(' ')
  const set = new Set(pattern)
  const quickCheck = new Set(strArr)
  if (set.size !== quickCheck.size) return false

  const map = new Map()
  for (const ltr of set) map.set(ltr, strArr[pattern.indexOf(ltr)])
  return [...pattern].map(ltr => map.get(ltr)).join(' ') === str
}

function optimize (pattern, str) {
  const strArr = str.split(' ')
  if (pattern.length !== strArr.length) return false

  const [map, set] = [new Map(), new Set()]
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== strArr[i]) return false
    } else {
      map.set(pattern[i], strArr[i])
      if (set.has(strArr[i])) return false
      set.add(strArr[i])
    }
  }
  return true
}

test(
  wordPattern,
  ['abba', 'dog cat cat dog'], // true
  ['abba', 'dog cat cat fish'], // false
  ['aaaa', 'dog cat cat dog'], // false
  ['abba', 'dog dog dog dog'] // false
)

test(
  optimize,
  ['abba', 'dog cat cat dog'], // true
  ['abba', 'dog cat cat fish'], // false
  ['aaaa', 'dog cat cat dog'], // false
  ['abba', 'dog dog dog dog'] // false
)
