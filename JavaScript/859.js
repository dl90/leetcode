import { test } from './test.js'
/*
  Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

  Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

  Example 1:
    Input: A = "ab", B = "ba"
    Output: true
    Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

  Example 2:
    Input: A = "ab", B = "ab"
    Output: false
    Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

  Example 3:
    Input: A = "aa", B = "aa"
    Output: true
    Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

  Example 4:
    Input: A = "aaaaaaabc", B = "aaaaaaacb"
    Output: true

  Example 5:
    Input: A = "", B = "aa"
    Output: false

  Constraints:
    0 <= A.length <= 20000
    0 <= B.length <= 20000
    A and B consist of lowercase letters.
*/

var buddyStrings = function (A, B) {
  if (A.length !== B.length) return false

  const len = A.length
  if (len < 2) return false
  if (A === B) {
    const set = new Set(A)
    return set.size < len
  }

  const arrA = A.split('')
  const arrB = B.split('')
  const diff = new Set()
  for (let i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) diff.add(i)
    if (diff.size > 2) return false
  }

  const [i, j] = diff;
  [arrA[i], arrA[j]] = [arrA[j], arrA[i]]
  return arrA.every((ltr, idx) => ltr === arrB[idx])
}

test(
  buddyStrings,
  ['ab', 'ba'], // true
  ['ab', 'ab'], // false
  ['aa', 'aa'], // true
  ['aaaaaaabc', 'aaaaaaacb'], // true
  ['', 'aa'], // false
  ['abab', 'abab'] // true
)
