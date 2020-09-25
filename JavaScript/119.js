import { test } from './test.js'
/*
  Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
  Note that the row index starts from 0.

  In Pascal's triangle, each number is the sum of the two numbers directly above it.

  Example:
    Input: 3
    Output: [1,3,3,1]
    Follow up: Could you optimize your algorithm to use only O(k) extra space?
*/

var getRow = function (rowIndex) {
  const res = [1]
  let prev = res

  for (let i = 0; i < rowIndex; i++) {
    for (let j = 0; j < prev.length - 1; j++) {
      prev[j] = prev[j] + prev[j + 1]
    }
    prev = res.concat(prev)
  }

  return prev
}

// console.log(getRow(50))

test(
  getRow,
  0, // [1]
  3, // [1, 3, 3, 1]
  10 // [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
)
