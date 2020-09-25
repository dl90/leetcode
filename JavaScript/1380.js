'use strict'
const test = require('./test.js').test
/*
  Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
  A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

  Example 1:
    Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
    Output: [15]
    Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

  Example 2:
    Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
    Output: [12]
    Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

  Example 3:
    Input: matrix = [[7,8],[1,2]]
    Output: [7]

  Constraints:
    m == mat.length
    n == mat[i].length
    1 <= n, m <= 50
    1 <= matrix[i][j] <= 10^5.
    All elements in the matrix are distinct.
*/

var luckyNumbers = function (matrix) {
  const len_y = matrix.length
  const len_x = matrix[0].length
  const res = []

  const rowArr = []
  const colArr = []

  // pushes the min of each sub-array
  for (let row = 0; row < len_y; row++) {
    let minRow = 100001
    for (let column = 0; column < len_x; column++) {
      const x = matrix[row][column]
      if (x < minRow) minRow = x
    }
    rowArr.push(minRow)
  }

  // pushes the max value of each column (len_x)
  for (let column = 0; column < len_x; column++) {
    let maxColumn = 0
    matrix.forEach(ele => {
      const y = ele[column]
      if (y > maxColumn) maxColumn = y
    })
    colArr.push(maxColumn)
  }

  // matches rowArr with colArr
  for (let i = 0; i < rowArr.length; i++) if (colArr.includes(rowArr[i])) res.push(rowArr[i])

  return res
}

test(
  luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]), // [15]
  luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]), // [12]
  luckyNumbers([[7, 8], [1, 2]]) // [7]
)
