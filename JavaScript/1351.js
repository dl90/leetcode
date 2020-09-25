'use strict'
const test = require('./test.js').test
/*
  Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
  Return the number of negative numbers in grid.

  Example 1:
    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Explanation: There are 8 negatives number in the matrix.

  Example 2:
    Input: grid = [[3,2],[1,0]]
    Output: 0

  Example 3:
    Input: grid = [[1,-1],[-1,-1]]
    Output: 3

  Example 4:
    Input: grid = [[-1]]
    Output: 1

  Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 100
    -100 <= grid[i][j] <= 100
*/

var countNegatives = function (grid) {
  const xLen = grid[0].length
  const yLen = grid.length

  let counter = 0
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      // console.log(grid[y][x]);
      if (grid[y][x] < 0) {
        // console.log(y, x, xLen - x);
        counter += xLen - x
        break
      }
    }
  }
  return counter
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]), // 8
    countNegatives([[3, 2], [1, 0]]), // 0
    countNegatives([[1, -1], [-1, -1]]), // 3
    countNegatives([[-1]]) // 1
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
