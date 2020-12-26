'use strict'
const test = require('../test.js').test
/*
  Given an integer array arr of distinct integers and an integer k.
  A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]).
  In each round of the game, we compare arr[0] with arr[1],
  the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array.
  The game ends when an integer wins k consecutive rounds.

  Return the integer which will win the game.
  It is guaranteed that there will be a winner of the game.

  Example 1:
    Input: arr = [2,1,3,5,4,6,7], k = 2
    Output: 5
    Explanation: Let's see the rounds of the game:
      Round |       arr       | winner | win_count
        1   | [2,1,3,5,4,6,7] | 2      | 1
        2   | [2,3,5,4,6,7,1] | 3      | 1
        3   | [3,5,4,6,7,1,2] | 5      | 1
        4   | [5,4,6,7,1,2,3] | 5      | 2
      So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.

  Example 2:
    Input: arr = [3,2,1], k = 10
    Output: 3
    Explanation: 3 will win the first 10 rounds consecutively.

  Example 3:
    Input: arr = [1,9,8,2,3,7,6,4,5], k = 7
    Output: 9

  Example 4:
    Input: arr = [1,11,22,33,44,55,66,77,88,99], k = 1000000000
    Output: 99

  Constraints:
    2 <= arr.length <= 10^5
    1 <= arr[i] <= 10^6
    arr contains distinct integers.
    1 <= k <= 10^9
*/

var getWinner = function (arr, k) {
  if (k >= arr.length) return Math.max(...arr)
  // if k >= arr.length, were basically looking at Math.max of the arr

  let greater = arr[0]; let count = 0
  for (let i = 1; count < k && i < arr.length; i++) {
    if (greater < arr[i]) {
      greater = arr[i]
      count = 0
    }
    count++
  }
  return greater
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    getWinner([2, 1, 3, 5, 4, 6, 7], 2), // 5
    getWinner([3, 2, 1], 3), // 3
    getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7), // 9
    getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000), // 99
    getWinner([1, 25, 35, 42, 68, 70], 2) // 70
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
