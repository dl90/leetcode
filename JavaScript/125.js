'use strict'
const test = require('./test.js').test
/*
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:
    Input: "A man, a plan, a canal: Panama"
    Output: true

  Example 2:
    Input: "race a car"
    Output: false

  Constraints:
    s consists only of printable ASCII characters.
*/

var isPalindrome = function (s) {
  if (s.length < 2) return true
  let i = 0; let j = s.length - 1
  let _a, _b, a, b
  while (i <= j) {
    a = s.charCodeAt(i)
    b = s.charCodeAt(j);

    // ASCII [48 - 57] = numeric, [65 - 90] = capital, [97 - 122] = lowercase
    (a >= 48 && a <= 57) || (a >= 65 && a <= 90) || (a >= 97 && a <= 122) ? _a = true : (i++, _a = false);
    (b >= 48 && b <= 57) || (b >= 65 && b <= 90) || (b >= 97 && b <= 122) ? _b = true : (j--, _b = false)

    if (_a && _b) {
      if ((a <= 57 || b <= 57) && a != b) return false // numeric
      else if (a != b && Math.max(a, b) - 32 != Math.min(a, b)) return false // upper/lowercase
      i++
      j--
    }
  }

  return true
}

function useRegex (s) {
  if (s.length < 2) return true
  const letterRange = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (let i = 0, j = letterRange.length - 1; i <= j; i++, j--) {
    if (letterRange[i] != letterRange[j]) return false
  }
  return true
};

test(
  isPalindrome,
  'A man, a plan, a canal: Panama', // true
  'race a car', // false
  '0P', // false
  '1b1' // true
)

test(
  useRegex,
  'A man, a plan, a canal: Panama', // true
  'race a car', // false
  '0P', // false
  '1b1' // true
)
