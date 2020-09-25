'use strict'
const test = require('./test.js').test
/*
  Given a square matrix mat, return the sum of the matrix diagonals.
  Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

  Example 1:
    Input: mat = [[1,2,3],
                  [4,5,6],
                  [7,8,9]]
    Output: 25
    Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
    Notice that element mat[1][1] = 5 is counted only once.

  Example 2:
    Input: mat = [[1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1],
                  [1,1,1,1]]
    Output: 8

  Example 3:
    Input: mat = [[5]]
    Output: 5

  Constraints:
    n == mat.length == mat[i].length
    1 <= n <= 100
    1 <= mat[i][j] <= 100
*/

var diagonalSum = function (mat) {
  const len = mat.length
  let [sum, offset] = [0, 0]
  for (let i = 0, j = len - 1; i < len; i++, j--) {
    if (i === j) offset += mat[i][i]
    sum += mat[i][i] + mat[i][j]
  }
  return sum - offset
}

test(
  diagonalSum,
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], // 25
  [[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]], // 8
  [[[5]]] // 5
)
