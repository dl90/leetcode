'use strict'
const test = require('../test.js').test
/*
  Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if
  either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

  Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

  Example 1:
    Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
    Output: 1

  Constraints:
    1 <= dominoes.length <= 40000
    1 <= dominoes[i][j] <= 9
*/

var numEquivDominoPairs = function (dominoes) {
  const len = dominoes.length
  let res = 0

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const [a, b] = dominoes[i]
      const [c, d] = dominoes[j]

      if ((a === c && b === d) || (a === d && b === c)) res++
    }
  }
  return res
}

function optimized (dominoes) {
  const map = new Map()
  let [res, key, max, min] = [0]

  for (const [a, b] of dominoes) {
    max = Math.max(a, b)
    min = Math.min(a, b)
    key = `${min}|${max}`

    if (map.has(key)) res += map.get(key)
    map.set(key, (map.get(key) ?? 0) + 1)
  }
  return res
}

test(
  numEquivDominoPairs,
  [[[1, 2], [2, 1], [3, 4], [5, 6]]], // 1
  [[[1, 2], [2, 1], [3, 4], [5, 6], [1, 2], [2, 1]]] // 6
)

test(
  optimized,
  [[[1, 2], [2, 1], [3, 4], [5, 6]]], // 1
  [[[1, 2], [2, 1], [3, 4], [5, 6], [1, 2], [2, 1]]] // 6
)
