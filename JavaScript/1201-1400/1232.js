import { test } from '../test.js'
/*
  You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
  Check if these points make a straight line in the XY plane.

  Example 1:
    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    Output: true

  Example 2:
    Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
    Output: false

  Constraints:
    2 <= coordinates.length <= 1000
    coordinates[i].length == 2
    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
    coordinates contains no duplicate point.
*/

var checkStraightLine = (coordinates) => {
  if (coordinates.length === 2) return true
  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]

  /*
    y = mx + b
    b = y - mx
    m = (y2 - y1) / (x2 - x1)
    watch for x2 - x1 === 0
  */
  if (x2 - x1 === 0) return coordinates.every(([x]) => x === x1)
  const m = (y2 - y1) / (x2 - x1)
  const b = y1 - m * x1
  return coordinates.every(([x, y]) => y === m * x + b)
}

test(
  checkStraightLine,
  [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]], // true
  [[[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]], // false
  [[[0, 0], [0, 1], [0, -1]]], // true
  [[[2, 4], [2, 5], [2, 8]]], // true
  [[[-1, -1], [0, 0], [2, 2]]] // true
)
