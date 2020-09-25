'use strict'
const test = require('./test.js').test
/*
  Given an array of integers nums.
  A pair (i,j) is called good if nums[i] == nums[j] and i < j.
  Return the number of good pairs.

  Example 1:
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

  Example 2:
    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.

  Example 3:
    Input: nums = [1,2,3]
    Output: 0

  Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100

  Count how many times each number appears. If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.
*/

var numIdenticalPairs = function (nums) {
  const map = new Map()
  let count = 0

  /*
    because were iterating, all future occurrences guarantee i < j
    adding the number of previous repeats to count during iteration accounts for number of good pairs
    arr    [1, 1, 1, 1, 1]
    count     1, 2, 3, 4, 5
    pairs       1, 3, 6, 10

    idx | count | before incrementing | pairs
    0     1       0
    1     2       1                1  (0, 1)
    2     3       2     (1+2)      3  (0, 2) (1, 2)
    3     4       3     (3+3)      6  (0, 3) (1, 3) (2, 3)
    4     5       4     (6+4)      10 (0, 4) (1, 4) (2, 4) (3, 4)
  */
  nums.forEach(ele => {
    if (map.has(ele)) {
      count += map.get(ele)
      map.set(ele, map.get(ele) + 1)
    } else {
      map.set(ele, 1)
    }
  })

  return count
}

function loop (nums) {
  const map = new Map()
  let count = 0
  nums.forEach(ele => map.has(ele) ? map.set(ele, map.get(ele) + 1) : map.set(ele, 1))
  for (const [_, val] of map) if (val > 1) count += val * (val - 1) / 2
  return count
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    numIdenticalPairs([1, 2, 3, 1, 1, 3]), // 4
    numIdenticalPairs([1, 1, 1, 1]), // 6
    numIdenticalPairs([1, 2, 3]) // 0

    // loop([1, 2, 3, 1, 1, 3]), // 4
    // loop([1, 1, 1, 1]), // 6
    // loop([1, 2, 3]), // 0
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
