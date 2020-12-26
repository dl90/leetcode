'use strict'
const test = require('../test.js').test
/*
  Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively.
  You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
  Return True if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. Return False otherwise.

  Example 1:
    Input: path = "NES"
    Output: false
    Explanation: Notice that the path doesn't cross any point more than once.

  Example 2:
    Input: path = "NESWW"
    Output: true
    Explanation: Notice that the path visits the origin twice.

  Constraints:
    1 <= path.length <= 10^4
    path will only consist of characters in {'N', 'S', 'E', 'W}
*/

var isPathCrossing = function (path) {
  const len = path.length
  if (len == 1) return false

  const directions = new Map([['N', [0, 1]], ['E', [1, 0]], ['S', [0, -1]], ['W', [-1, 0]]])
  const cache = new Set()

  let [x, y] = [0, 0]
  cache.add([x, y])

  for (const letter of path) {
    x += directions.get(letter)[0]
    y += directions.get(letter)[1]

    for (const [_x, _y] of cache) {
      if (_x == x && _y == y) return true
    }
    cache.add([x, y])
  }
  return false
}

function str (path) {
  const len = path.length
  if (len == 1) return false

  const set = new Set()
  let [x, y] = [0, 0]
  set.add(`${x},${y}`)

  for (const letter of path) {
    switch (letter) {
      case 'N':
        y += 1
        break
      case 'S':
        y -= 1
        break
      case 'E':
        x += 1
        break
      case 'W':
        x -= 1
        break
      default:
        console.log(letter)
        break
    }

    const cords = `${x},${y}`
    if (set.has(cords)) return true
    set.add(cords)
  }
  return false
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    isPathCrossing('NES'), // false
    isPathCrossing('NESWW'), // true
    str('NES'), // false
    str('NESWW') // true

  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
