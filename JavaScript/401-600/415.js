'use strict'
const test = require('../test.js').test
/*
  Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

  Note:
    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, '0')
  num2 = num2.padStart(len, '0')
  let [res, carry, digit, temp] = ['', 0]

  for (let i = len - 1; i >= 0; i--) {
    temp = +num1[i] + +num2[i] + carry
    digit = temp % 10
    carry = ~~(temp / 10)
    res = digit + res
  }
  return carry ? 1 + res : res
}

function arr (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, '0')
  num2 = num2.padStart(len, '0')
  const res = []
  let [carry, digit, temp] = [0]

  for (let i = len - 1; i >= 0; i--) {
    temp = +num1[i] + +num2[i] + carry
    digit = temp % 10
    carry = ~~(temp / 10)
    res[i] = digit
  }
  return carry ? 1 + res.join('') : res.join('')
}

test(
  addStrings,
  ['1234567890', '1234567890'], // 2469135780
  ['1', '9999999999999999999999999999999999999999999999999999999999999999999999999999999999999']
)

test(
  arr,
  ['1234567890', '1234567890'], // 2469135780
  ['1', '9999999999999999999999999999999999999999999999999999999999999999999999999999999999999']
)
