'use strict'
const test = require('./test.js').test
/*
  Given an integer array bloomDay, an integer m and an integer k.
  We need to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
  The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
  Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

  Example 1:
    Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
    Output: 3
    Explanation: Let's see what happened in the first three days. x means flower bloomed and _ means flower didn't bloom in the garden.
      We need 3 bouquets each should contain 1 flower.
      After day 1: [x, _, _, _, _]   // we can only make one bouquet.
      After day 2: [x, _, _, _, x]   // we can only make two bouquets.
      After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.

  Example 2:
    Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
    Output: -1
    Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers.
      We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

  Example 3:
    Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
    Output: 12
    Explanation: We need 2 bouquets each should have 3 flowers.
      Here's the garden after the 7 and 12 days:
      After day 7: [x, x, x, x, _, x, x]
      We can make one bouquet of the first three flowers that bloomed.
      We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
      After day 12: [x, x, x, x, x, x, x]
      It is obvious that we can make two bouquets in different ways.

  Example 4:
    Input: bloomDay = [1000000000,1000000000], m = 1, k = 1
    Output: 1000000000
    Explanation: You need to wait 1000000000 days to have a flower ready for a bouquet.

  Example 5:
    Input: bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
    Output: 9

  Constraints:
    bloomDay.length == n
    1 <= n <= 10^5
    1 <= bloomDay[i] <= 10^9
    1 <= m <= 10^6
    1 <= k <= n

  If we can make m or more bouquets at day x, then we can still make m or more bouquets at any day y > x.
  We can check easily if we can make enough bouquets at day x if we can get group adjacent flowers at day x.
 */

var minDays = function (bloomDay, m, k) {
  /*
    flowers needs to be adjacent
    m == num of bouquet
    k == num of flowers needed per bouquet

    binary search to check num of bouquets at median day (mid) against m
    iterate over bloomDay at median day (mid) to count number of bouquets
  */
  const len = bloomDay.length
  if (len < m * k) return -1

  const set = new Set(bloomDay)
  if (set.size == 1 && m <= set.size && k <= set.size) return set.values().next().value

  let start = 0
  let end = Math.max(...bloomDay)
  let flowers = 0
  let bouquet = 0

  // breaks when start = mid + 1 > end
  while (start < end) {
    const mid = parseInt(start + ((end - start) / 2))
    for (let i = 0; i < len; i++) {
      // accounts for adjacent thanks to i
      if (bloomDay[i] <= mid) {
        flowers++
        if (flowers == k) {
          bouquet++
          flowers = 0
        }
      } else {
        // any breaks to adjacency resets the flower count
        flowers = 0
      }
    }

    /*
      [start, ... mid, ... end]
      remove direct comparison b/c matching value != earliest (min) num of days
      if num of bouquet < num of bouquet needed (m) : start = mid + 1
      else : end = mid && keep going
    */
    // console.log("before  ", start, mid, end, bouquet, flowers)
    bouquet < m ? start = mid + 1 : end = mid // **
    // console.log("after  ", start, mid, end, bouquet, flowers)
    bouquet = 0
    flowers = 0
  }
  return start > end ? -1 : start
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    minDays([1, 10, 3, 10, 2], 3, 2), // -1
    minDays([1, 10, 3, 10, 2], 3, 1), // 3
    minDays([7, 7, 7, 7, 12, 7, 7], 2, 3) // 12
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
