'use strict'
const test = require('../test.js').test
/*
  There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group.
  Given the array groupSizes of length n telling the group size each person belongs to,
  return the groups there are and the people's IDs each group includes.

  You can return any solution in any order and the same applies for IDs.
  Also, it is guaranteed that there exists at least one solution.

  Example 1:
    Input: groupSizes = [3,3,3,3,3,1,3]
    Output: [[5],[0,1,2],[3,4,6]]
    Explanation: Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

  Example 2:
    Input: groupSizes = [2,1,3,3,3,2]
    Output: [[1],[0,5],[2,3,4]]

  Constraints:
    groupSizes.length == n
    1 <= n <= 500
    1 <= groupSizes[i] <= n
*/

var groupThePeople = function (groupSizes) {
  const len = groupSizes.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.has(groupSizes[i]) ? map.get(groupSizes[i]).push(i) : map.set(groupSizes[i], [i])
  }

  const res = []
  let seg
  for (const [key, val] of map) {
    while (val.length) {
      seg = []
      for (let i = 0; i < key; i++) seg.push(val.pop())
      res.push(seg)
    }
  }
  return res
}

function optimized (groupSizes) {
  const map = new Map(); const res = []
  groupSizes.forEach((grp, idx) => {
    map.has(grp) ? map.get(grp).push(idx) : map.set(grp, [idx])

    if (map.get(grp).length === grp) {
      res.push(map.get(grp))
      map.delete(grp)
    }
  })
  return res
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    // groupThePeople([3, 3, 3, 3, 3, 1, 3]), // [[5],[0,1,2],[3,4,6]]
    // groupThePeople([2, 1, 3, 3, 3, 2]), // [[1],[0,5],[2,3,4]]

    optimized([3, 3, 3, 3, 3, 1, 3]), // [[5],[0,1,2],[3,4,6]]
    optimized([2, 1, 3, 3, 3, 2]) // [[1],[0,5],[2,3,4]]
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
