import { test } from '../test.js'
/*
  On a 2-dimensional grid, there are 4 types of squares:

    1 represents the starting square.  There is exactly one starting square.
    2 represents the ending square.  There is exactly one ending square.
    0 represents empty squares we can walk over.
    -1 represents obstacles that we cannot walk over.

  Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

  Example 1:
    Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
    Output: 2
    Explanation: We have the following two paths:
      1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
      2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

  Example 2:
    Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
    Output: 4
    Explanation: We have the following four paths:
      1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
      2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
      3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
      4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

  Example 3:
    Input: [[0,1],[2,0]]
    Output: 0
    Explanation:
    There is no path that walks over every empty square exactly once.
    Note that the starting and ending square can be anywhere in the grid.

  Note: 1 <= grid.length * grid[0].length <= 20
*/

// O(3^n) time | O(n) space
// Where n is the total elements of the matrix

function uniquePathsIII (grid) {
  let numOfStepsRequired = 0
  let row = null
  let col = null
  const ans = { numOfPaths: 0 }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        row = i
        col = j
      }
      if (grid[i][j] !== -1) numOfStepsRequired += 1
    }
  }

  dfs(grid, row, col, 1, numOfStepsRequired, ans)

  return ans.numOfPaths
}

function dfs (grid, row, col, steps, numOfStepsRequired, ans) {
  if (isOutOfBound(row, col, grid) || grid[row][col] === -1) return 0

  if (grid[row][col] === 2) {
    return steps === numOfStepsRequired ? 1 : 0
  }

  // mark as visited
  grid[row][col] = -1
  const x = [0, 0, -1, 1]
  const y = [-1, 1, 0, 0]
  for (let i = 0; i < 4; i++) {
    const traverse = dfs(
      grid,
      row + x[i],
      col + y[i],
      steps + 1,
      numOfStepsRequired,
      ans
    )
    ans.numOfPaths += traverse
  }

  // mark as unvisited back
  grid[row][col] = 0
  return 0
}

function isOutOfBound (row, col, grid) {
  return (
    row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1
  )
}
