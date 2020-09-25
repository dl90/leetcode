'use strict'
import { test } from './test.js'
/*
  Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

  Example 1:
    Input: 00000000000000000000000000001011
    Output: 3
    Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

  Example 2:
    Input: 00000000000000000000000010000000
    Output: 1
    Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

  Example 3:
    Input: 11111111111111111111111111111101
    Output: 31
    Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

  Note:
    Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.

    In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.

  Follow up:
    If this function is called many times, how would you optimize it?
*/

var hammingWeight = function (n) {
  const least = n % 2
  const rest = n >>> 1
  const restArr = rest.toString(2).split('')
  return restArr.reduce((acc, cur) => acc + +cur, least)
}

function oneLine (n) {
  return n.toString(2).split('').filter(v => +v).length
}

test(
  hammingWeight,
  parseInt('00000000000000000000000000001011', 2), // 3
  parseInt('00000000000000000000000010000000', 2), // 1
  parseInt('11111111111111111111111111111101', 2) // 31
)

test(
  oneLine,
  parseInt('00000000000000000000000000001011', 2), // 3
  parseInt('00000000000000000000000010000000', 2), // 1
  parseInt('11111111111111111111111111111101', 2) // 31
)
