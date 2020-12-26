import { test } from '../test.js'
/*
  The count-and-say sequence is the sequence of integers with the first five terms as following:

    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    1 is read off as "one 1" or 11.
    11 is read off as "two 1s" or 21.
    21 is read off as "one 2, then one 1" or 1211.

  Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
  You can do so recursively, in other words from the previous member read off the digits,
  counting the number of digits in groups of the same digit.

  Note: Each term of the sequence of integers will be represented as a string.

  Example 1:
    Input: 1
    Output: "1"
    Explanation: This is the base case.

  Example 2:
    Input: 4
    Output: "1211"
    Explanation:
      For n = 3 the term was "21" in which we have two groups "2" and "1",
      "2" can be read as "12" which means frequency = 1 and value = 2,
      the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
*/

var countAndSay = function (n) {
  let res = '1'
  let count

  for (let i = 1; i < n; i++) {
    const numArr = [...res]
    count = 1
    res = ''
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[j] !== numArr[j + 1]) {
        res += count + numArr[j]
        count = 1
      } else count++
    }
  }
  return res
}

function recursive (n) {
  if (n === 1) return '1'
  const prevArr = [...recursive(n - 1)]
  let res = ''
  let count = 1

  for (let i = 0; i < prevArr.length; i++) {
    if (prevArr[i] !== prevArr[i + 1]) {
      res += count + prevArr[i]
      count = 1
    } else count++
  }
  return res
}

test(
  countAndSay,
  5, // "111221"
  6, // "312211"
  7 // "13112221"
)

test(
  recursive,
  5, // "111221"
  6, // "312211"
  7 // "13112221"
)
