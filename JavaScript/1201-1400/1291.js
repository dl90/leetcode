import { test } from '../test.js'
/*
  An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
  Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

  Example 1:
    Input: low = 100, high = 300
    Output: [123,234]

  Example 2:
    Input: low = 1000, high = 13000
    Output: [1234,2345,3456,4567,5678,6789,12345]

  Constraints: 10 <= low <= high <= 10^9
*/

var sequentialDigits = function (low, high) {
  const res = []
  const queue = []
  for (let i = 1; i <= 9; i++) queue.push(i)

  while (queue.length) {
    const num = queue.shift()

    if (num >= low && num <= high) res.push(num)
    else if (num > high) break

    const lastDigit = num % 10
    if (lastDigit < 9) queue.push((num * 10 + (lastDigit + 1)))
  }
  return res
}

test(
  sequentialDigits,
  [100, 300], // [123, 234]
  [1000, 13000] // [1234,2345,3456,4567,5678,6789,12345]
)
