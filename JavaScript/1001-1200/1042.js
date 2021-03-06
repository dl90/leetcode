'use strict'
const test = require('../test.js').test
/* @NOTE difficult */
/*
  You have N gardens, labelled 1 to N. In each garden, you want to plant one of 4 types of flowers.
  paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.
  Also, there is no garden that has more than 3 paths coming into or leaving it.

  Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
  Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.
  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

  Example 1:
    Input: N = 3, paths = [[1,2],[2,3],[3,1]]
    Output: [1,2,3]

  Example 2:
    Input: N = 4, paths = [[1,2],[3,4]]
    Output: [1,2,1,2]

  Example 3:
    Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
    Output: [1,2,3,4]

  Note:
    1 <= N <= 10000
    0 <= paths.size <= 20000
    No garden has 4 or more paths coming into or leaving it.
    It is guaranteed an answer exists.

  Since each garden is connected to at most 3 gardens, there's always an available color for each garden.
  For example, if one garden is next to gardens with colors 1, 3, 4, then color #2 is available.
*/

var gardenNoAdj = function (N, paths) {
  const arr = [...new Array(N)].map(_ => [])

  let to, from
  paths.forEach(path => {
    from = path[0] - 1
    to = path[1] - 1
    arr[from].push(to)
    arr[to].push(from)
  })

  const res = new Array(N)
  for (let i = 0; i < N; i++) {
    // console.log(i, "connected nodes", arr[i])
    const types = new Array(5).fill(1)
    arr[i].forEach(idx => { types[res[idx]] = 0 })
    for (let j = 1; j <= 4; j++) {
      // console.log("\t", types, j, types[j])
      if (types[j]) {
        res[i] = j
        break
      }
      // console.log(res)
    }
  }

  return res
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    // gardenNoAdj(3, [[1, 2], [2, 3], [3, 1]]), // [1,2,3]
    // gardenNoAdj(4, [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]]), // [1,2,3,4]
    gardenNoAdj(4, [[1, 2], [3, 4]]) // [1,2,1,2]
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
