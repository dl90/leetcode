'use strict'
const test = require('../test.js').test
/*
  There are n cities numbered from 0 to n-1 and n-1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

  Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b.
  This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
  Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

  It's guaranteed that each city can reach the city 0 after reorder.

  Example 1:
    Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
    Output: 3
    Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

  Example 2:
    Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
    Output: 2
    Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

  Example 3:
    Input: n = 3, connections = [[1,0],[2,0]]
    Output: 0

  Constraints:
    2 <= n <= 5 * 10^4
    connections.length == n-1
    connections[i].length == 2
    0 <= connections[i][0], connections[i][1] <= n-1
    connections[i][0] != connections[i][1]
*/

var minReorder = function (n, connections) {
  const set = new Set([0])
  let count = 0

  connections.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1]
    return a[0] - b[0]
  })

  for (const [src, target] of connections) {
    if (set.has(target)) {
      set.add(src)
    } else {
      set.add(target)
      count++
    }
  }

  return count
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]), // 3
    minReorder(5, [[1, 0], [1, 2], [3, 2], [3, 4]]), // 2
    minReorder(3, [[1, 0], [2, 0]]) // 0
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
