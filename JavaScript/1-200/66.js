import { test } from '../test.js'
/*
  Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
  The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
  You may assume the integer does not contain any leading zero, except the number 0 itself.

  Example 1:
    Input: [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.

  Example 2:
    Input: [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
*/

var plusOne = function (digits) {
  const len = digits.length - 1
  for (let i = len, carry = 0; i > -1; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
      carry = 1
      if (i === 0 && carry) return [1, ...digits]
    } else {
      carry ? digits[i] += carry : digits[i]++
      return digits
    }
  }
}

test(
  plusOne,
  [[1, 2, 3]], // [1,2,4]
  [[4, 3, 2, 1]], // [4,3,2,2]
  [[9, 9]], // [1,0,0]
  [[8, 9, 9]] // [9,0,0]
)
