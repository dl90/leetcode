'use strict'
const test = require('./test.js').test
/*
  Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

  Example 1:
    Input: low = 3, high = 7
    Output: 3
    Explanation: The odd numbers between 3 and 7 are [3,5,7].

  Example 2:
    Input: low = 8, high = 10
    Output: 1
    Explanation: The odd numbers between 8 and 10 are [9].

  Constraints:
    0 <= low <= high <= 10^9

  If the range (high - low + 1) is even, the number of even and odd numbers in this range will be the same.
  If the range (high - low + 1) is odd, the solution will depend on the parity of high and low.
*/

var countOdds = function (low, high) {
  const oddStart = low % 2
  const range = high - low + 1
  /*
	  count is based on if number starts as odd
	  [1, 2, 3] => 3 / 2 (rounds up) => 2
	  [0, 1, 2] => 3 / 2 (rounds down) => 1
	  [1, 2, 3, 4] => 4 / 2 (divides evenly) => 2
	  [0, 1, 2, 3] => 4 / 2 => 2
  */
  return oddStart ? Math.ceil(range / 2) : Math.floor(range / 2)
}

test(
  countOdds(3, 7), // 3
  countOdds(2, 6), // 2
  countOdds(8, 10) // 1
)
