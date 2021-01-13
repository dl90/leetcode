import test from '../test.js'
/*
  Symbol       Value
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

  Roman numerals are usually written largest to smallest from left to right.
  However, the numeral for four is not IIII. Instead, the number four is written as IV.
  Because the one is before the five we subtract it making four.
  The same principle applies to the number nine, which is written as IX.
  There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9.
  X can be placed before L (50) and C (100) to make 40 and 90.
  C can be placed before D (500) and M (1000) to make 400 and 900.
  Given an integer, convert it to a roman numeral.

  Example 1:
    Input: num = 3
    Output: "III"

  Example 2:
    Input: num = 4
    Output: "IV"

  Example 3:
    Input: num = 9
    Output: "IX"

  Example 4:
    Input: num = 58
    Output: "LVIII"
    Explanation: L = 50, V = 5, III = 3.

  Example 5:
    Input: num = 1994
    Output: "MCMXCIV"
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

  Constraints: 1 <= num <= 3999
*/

function intToRoman (num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ''
  let i = 0

  while (num > 0) {
    if (num < nums[i]) i++
    else {
      const multi = Math.floor(num / nums[i])
      num -= nums[i] * multi
      res += symbols[i].repeat(multi)
    }
  }
  return res
}

test(
  intToRoman,
  9, // 'IX'
  58, // 'LVIII'
  1994 // 'MCMXCIV'
)
