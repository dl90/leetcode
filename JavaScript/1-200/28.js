import { test } from '../test.js'
/*
  Implement strStr().
  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

  Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

  Clarification:
    What should we return when needle is an empty string? This is a great question to ask during an interview.
    For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

  Constraints: haystack and needle consist only of lowercase English characters.
*/

var strStr = function (haystack, needle) {
  if (!needle) return 0
  if (haystack.length < needle.length) return -1

  for (let i = 0, j = 0; i < haystack.length; i++) {
    let flag = true
    if (haystack[i] === needle[j]) {
      for (let k = i, l = j; l < needle.length; k++, l++) {
        if (haystack[k] !== needle[l]) {
          flag = false
          break
        }
      }
      if (flag) return i
    }
  }
  return -1
}

function optimized (haystack, needle) {
  if (!needle) return 0
  if (haystack.length < needle.length) return -1

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let flag = true
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false
          break
        }
      }
      if (flag) return i
    }
  }

  return -1
};

test(
  strStr,
  ['a', 'a'], // 0
  ['', ''], // 0
  ['a', ''], // 0
  ['hello', 'll'], // 2
  ['aaaaa', 'bba'], // -1
  ['mississippi', 'issip'] // 4
)

test(
  optimized,
  ['a', 'a'], // 0
  ['', ''], // 0
  ['a', ''], // 0
  ['hello', 'll'], // 2
  ['aaaaa', 'bba'], // -1
  ['mississippi', 'issip'] // 4
)
