import { test } from './test.js'
/*
  Given two binary strings, return their sum (also a binary string).
  The input strings are both non-empty and contains only characters 1 or 0.

  Example 1:
    Input: a = "11", b = "1"
    Output: "100"

  Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

  Constraints:
    Each string consists only of '0' or '1' characters.
    1 <= a.length, b.length <= 10^4
    Each string is either "0" or doesn't contain any leading zero.
*/

var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length)
  a.length === len ? b = b.padStart(len, '0') : a = a.padStart(len, '0')
  const aArr = Uint8Array.from(a)
  const bArr = Uint8Array.from(b)

  /*
    binary addition
      1111
      1111
     11110

    carry will never exceed 1 && overflow is always 1 bit when adding 2 binary numbers
  */
  let carry = 0
  const res = new Uint8Array(len)
  for (let i = len - 1; i > -1; i--) {
    const sum = aArr[i] + bArr[i] + carry
    res[i] = sum % 2
    carry = ~~(sum / 2)
  }
  return carry ? [carry, ...res].join('') : res.join('')
}

// overflows > 2^32
function limited (a, b) { return (parseInt(a, 2) + parseInt(b, 2) >>> 0).toString(2) };

test(
  addBinary,
  ['11', '1'], // "100"
  ['1010', '1011'], // "10101"
  ['100000000000000000000000000000000', '1'] // "100000000000000000000000000000001"
)

test(
  limited,
  ['11', '1'], // "100"
  ['1010', '1011'], // "10101"
  ['100000000000000000000000000000000', '1'] // 1
)
