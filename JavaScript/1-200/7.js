import test from '../test.js'
/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:
    Input: 123
    Output: 321

  Example 2:
    Input: -123
    Output: -321

  Example 3:
    Input: 120
    Output: 21

  Note:
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1].
    For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

function reverse (x) {
  const hex = Number(0x7FFFFFFF) // 2147483647
  if (x > hex || x < -hex) return 0

  const res = Number(String(Math.abs(x)).split('').reverse().join(''))
  if (Math.abs(res) > hex) return 0
  if (x > 0) return res
  return -res
}

test(
  reverse,
  -123456, // -654321
  0xFFFFFFFF, // 0
  654321 // 123456
)
