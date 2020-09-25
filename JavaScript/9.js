import { test } from './test.js'
/*
  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

  Example 1:
    Input: 121
    Output: true

  Example 2:
    Input: -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

  Example 3:
    Input: 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

  Follow up: Could you solve it without converting the integer to a string?
*/

var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  const numArr = [...String(x)]
  let j = 0

  for (let i = numArr.length - 1; i > 0; i--) {
    if (numArr[i] === numArr[j]) j++
    else return false
  }
  return true
}

function noConvert (x) {
  if (x < 0) return false
  if (x < 10) return true
  let revert = 0
  let mod10

  /*
    123 % 10 => 3
    Math.floor(123 / 10) => 12

    (i, revert)
    1234321 1
    123432 12
    12343 123
    1234 1234
    123 12343
    12 123432
    1 1234321
  */
  for (let i = x; i; i = Math.floor(i / 10)) {
    mod10 = i % 10
    if (mod10 === 0) revert *= 10
    else revert = revert * 10 + mod10
  }
  return revert === x
}

function alt (x) {
  if (x < 0) return false
  if (x < 10) return true
  const arr = []

  for (let i = x; i; i = Math.floor(i / 10)) arr.push(i % 10)
  // 1234321 => [1, 2, 3, 4, 3, 2, 1]

  const bound = Math.ceil(arr.length / 2) + 1
  for (let i = 0, j = arr.length - 1; i < bound; i++, j--) {
    if (arr[i] !== arr[j]) return false
  }
  return true
}

const num = 12345678987654321

test(
  isPalindrome,
  1234321, // true
  1234322, // false
  1000021, // false
  num // true
)

test(
  noConvert,
  1234321, // true
  1234322, // false
  1000021, // false
  num // true
)

test(
  alt,
  1234321, // true
  1234322, // false
  1000021, // false
  num // true
)
