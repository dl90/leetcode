import { test } from './test.js'
/*
  Write an efficient algorithm that searches for a value in an m x n matrix.
  This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

  Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
    Output: true

  Example 2:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
    Output: false

  Example 3:
    Input: matrix = [], target = 0
    Output: false

  Constraints:
    m == matrix.length
    n == matrix[i].length
    0 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
*/

var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false
  if (!matrix[0].length) return false
  const rows = matrix.length
  const cols = matrix[0].length
  const starts = []
  const ends = []
  let idx

  for (let i = 0; i < rows; i++) {
    starts.push(matrix[i][0])
    ends.push(matrix[i][cols - 1])
    if (target >= starts[i] && target <= ends[i]) {
      idx = i
      break
    }
  }
  if (idx === undefined) return false

  for (let i = 0; i < cols; i++) {
    if (matrix[idx][i] === target) return true
  }
  return false
}

function binarySearch (matrix, target) {
  if (!matrix.length) return false
  if (!matrix[0].length) return false
  const rows = matrix.length
  const cols = matrix[0].length
  const starts = []
  const ends = []
  let idx

  for (let i = 0; i < rows; i++) {
    starts.push(matrix[i][0])
    ends.push(matrix[i][cols - 1])
    if (target >= starts[i] && target <= ends[i]) {
      idx = i
      break
    }
  }
  if (idx === undefined) return false

  let start = 0
  let end = cols
  let mid

  const nums = matrix[idx]
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2)
    if (nums[mid] === target) return true
    nums[mid] > target ? end = mid : start = mid + 1
  }
  return false
}

test(
  searchMatrix,
  [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3], // true
  [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13], // false
  [[], 0], // false
  [[1], 0] // false
)

test(
  binarySearch,
  [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3], // true
  [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13], // false
  [[], 0], // false
  [[1], 0] // false
)
