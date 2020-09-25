'use strict'
const test = require('./test.js').test
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
  const [x0, y0] = coordinates[0]
  const [x1, y1] = coordinates[1]

  /*
    y = mx + b
    b = y - mx
    m = (y2 - y1) / (x2 - x1)
    watch for x2 - x1 === 0
  */
  if (x1 - x0 === 0) return coordinates.every(([x]) => x === x0)
  const m = y1 - y0 / x1 - x0
  const b = y0 - m * x0
  return coordinates.every(([x, y]) => y === m * x + b)
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]), // true;
    checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]), // false;
    checkStraightLine([[0, 0], [0, 1], [0, -1]]), // true;
    checkStraightLine([[2, 4], [2, 5], [2, 8]]) // true;
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
