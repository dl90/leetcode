import { test } from '../test.js'
/*
  Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
  return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

  If the last word does not exist, return 0.

  Note: A word is defined as a maximal substring consisting of non-space characters only.

  Example:
    Input: "Hello World"
    Output: 5
*/

var lengthOfLastWord = function (s) {
  let count = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') count++
    else if (count) return count
  }
  return count
}

test(
  lengthOfLastWord,
  'Hello World', // 5
  'a ', // 1
  ' ', // 0
  'b   a    ' // 1
)
