'use strict'
const test = require('../test.js').test
/*
  Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci].
  For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
  Return the number of cells with odd values in the matrix after applying the increment to all indices.

  Example 1:
    Input: n = 2, m = 3, indices = [[0,1],[1,1]]
    Output: 6
    Explanation: Initial matrix = [[0,0,0],[0,0,0]].
      After applying first increment it becomes [[1,2,1],[0,1,0]].
      The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

  Example 2:
    Input: n = 2, m = 2, indices = [[1,1],[0,0]]
    Output: 0
    Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

  Constraints:
    1 <= n <= 50
    1 <= m <= 50
    1 <= indices.length <= 100
    0 <= indices[i][0] < n
    0 <= indices[i][1] < m
*/

var oddCells = function (n, m, indices) {
  // n = rows
  // m = columns
  const arr = new Array(n).fill(null).map(ele => new Array(m).fill(0))
  const rows = new Map()
  const columns = new Map()

  indices.forEach(([row, col]) => {
    rows.has(row) ? rows.set(row, rows.get(row) + 1) : rows.set(row, 1)
    columns.has(col) ? columns.set(col, columns.get(col) + 1) : columns.set(col, 1)
  })

  /*
    n = 2, m = 3, indices = [[0,1],[1,1]]
      row 1 : +1  col 1 : +1
      row 2 : +1  col 1 : +1
    instead of adding one at a time, tally it and add it

            +2
    +1  [0, 0, 0] => [1, 3, 1]
    +1  [0, 0, 0]    [1, 3, 1]

  */
  let rowAdd, colAdd
  for (let i = 0; i < n; i++) {
    rowAdd = rows.get(i)
    for (let j = 0; j < m; j++) {
      colAdd = columns.get(j)
      if (rowAdd) arr[i][j] += rowAdd
      if (colAdd) arr[i][j] += colAdd
    }
  }

  return arr.flat().filter(val => val % 2 == 1).length
}

test(
  oddCells(2, 3, [[0, 1], [1, 1]]), // 6
  oddCells(2, 2, [[1, 1], [0, 0]]) // 0
)
