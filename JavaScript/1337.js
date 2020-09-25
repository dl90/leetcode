'use strict'
const test = require('./test.js').test
/*
  Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians),
  return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

  A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
  or they have the same number of soldiers but i is less than j.

  Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

  Example 1:
    Input: mat =
    [[1,1,0,0,0],
     [1,1,1,1,0],
     [1,0,0,0,0],
     [1,1,0,0,0],
     [1,1,1,1,1]],
    k = 3
    Output: [2,0,3]
    Explanation:
      The number of soldiers for each row is:
      row 0 -> 2
      row 1 -> 4
      row 2 -> 1
      row 3 -> 2
      row 4 -> 5
      Rows ordered from the weakest to the strongest are [2,0,3,1,4]

  Example 2:
    Input: mat =
    [[1,0,0,0],
     [1,1,1,1],
     [1,0,0,0],
     [1,0,0,0]],
    k = 2
    Output: [0,2]
    Explanation:
      The number of soldiers for each row is:
      row 0 -> 1
      row 1 -> 4
      row 2 -> 1
      row 3 -> 1
      Rows ordered from the weakest to the strongest are [0,2,3,1]

  Constraints:
    m == mat.length
    n == mat[i].length
    2 <= n, m <= 100
    1 <= k <= m
    matrix[i][j] is either 0 or 1.
*/

var kWeakestRows = function (mat, k) {
  const map = new Map()
  const res = []

  for (let i = 0; i < mat.length; i++) {
    const soldiers = mat[i].reduce((acc, cur) => { return acc + cur })
    map.set(i, soldiers)
  }

  const sorted = [...map].sort((a, b) => a[1] - b[1])
  for (let i = 0; i < k; i++) res.push(sorted[i][0])
  return res
}

function faster (mat, k) {
  // arr.filter => arr.length
  return mat.map((row, idx) => [row.filter(val => val > 0).length, idx])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map(tuple => tuple[1])
    .slice(0, k)
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    // kWeakestRows([[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3), // [2,0,3]
    // kWeakestRows([[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2), // [0,2]

    faster([[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3), // [2,0,3]
    faster([[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2) // [0,2]
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
