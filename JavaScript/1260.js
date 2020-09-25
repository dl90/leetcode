'use strict'
const test = require('./test.js').test
/*
  Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

  In one shift operation:
    Element at grid[i][j] moves to grid[i][j + 1].
    Element at grid[i][n - 1] moves to grid[i + 1][0].
    Element at grid[m - 1][n - 1] moves to grid[0][0].

  Return the 2D grid after applying shift operation k times.

  Example 1:
    Input: grid =
    [[1,2,3],
     [4,5,6],
     [7,8,9]], k = 1
    Output:
    [[9,1,2],
     [3,4,5],
     [6,7,8]]

  Example 2:
    Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
    Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

  Example 3:
    Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
    Output: [[1,2,3],[4,5,6],[7,8,9]]

  Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m <= 50
    1 <= n <= 50
    -1000 <= grid[i][j] <= 1000
    0 <= k <= 100

  Simulate step by step. move grid[i][j] to grid[i][j+1]. handle last column of the grid.
  Put the matrix row by row to a vector. take k % vector.length and move last k of the vector to the beginning. put the vector to the matrix back the same way.
*/

var shiftGrid = function (grid, k) {
  if (k == 0) return grid
  const row = grid.length
  const col = grid[0].length
  if (row == 1 && col == 1) return grid

  const flat = grid.flat(2)
  const len = flat.length
  const realShift = k % len

  // shifted back to original position
  if (realShift == 0) return grid

  // concat two slices
  const ref = [...flat.slice(len - realShift), ...flat.slice(0, len - realShift)]

  // rebuild arr
  const res = []
  let counter = 0
  for (let i = 0; i < row; i++) {
    const temp = []
    for (let j = 0; j < col; j++) {
      temp[j] = ref[counter]
      counter++
    }
    res.push(temp)
  }

  return res
}

test(
  shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1), // [[9,1,2], [3,4,5], [6,7,8]]
  shiftGrid([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4), // [[12,0,21,13], [3,8,1,9], [19,7,2,5], [4,6,11,10]]
  shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9) // [[1,2,3], [4,5,6], [7,8,9]]
)
