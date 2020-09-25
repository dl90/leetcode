'use strict'
const test = require('./test.js').test
/*
  We have a collection of stones, each stone has a positive integer weight.
  Each turn, we choose the two heaviest stones and smash them together.
  Suppose the stones have weights x and y with x <= y.
  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

  At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

  Example 1:
    Input: [2,7,4,1,8,1]
    Output: 1
    Explanation:
      We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
      we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
      we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
      we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

  Note:
    1 <= stones.length <= 30
    1 <= stones[i] <= 1000
*/

var lastStoneWeight = function (stones) {
  if (!stones) return 0
  if (stones.length === 1) return 1
  const map = new Map()
  const set = new Set(stones)
  stones.map(val => { map.set(val, (map.get(val) ?? 0) + 1) })

  let [x, y, temp] = []
  while (set.size > 1) {
    y = Math.max(...set)
    set.delete(y)

    if (map.get(y) > 1) {
      x = y
      map.set(y, map.get(y) - 2)
      if (map.get(y)) set.add(y)
    } else {
      x = Math.max(...set)
      set.delete(x)
      map.set(y, map.get(y) - 1)
      map.set(x, map.get(x) - 1)
      if (map.get(x)) set.add(x)
    }

    temp = y - x
    map.set(temp, (map.get(temp) ?? 0) + 1)
    set.add(temp)
  }

  return map.get(temp) % 2 ? temp : 0
}

test(
  lastStoneWeight,
  [[2, 7, 4, 1, 8, 1]], // 1
  [[7, 6, 7, 6, 9]] // 3
)
