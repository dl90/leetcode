'use strict'
const test = require('./test.js').test
/*
  Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

  Example 1:
    Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

  Example 2:
    Input: arr = [1,2]
    Output: false

  Example 3:
    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
    Output: true

  Constraints:
    1 <= arr.length <= 1000
    -1000 <= arr[i] <= 1000
*/

var uniqueOccurrences = function (arr) {
  const cache = new Map()

  for (const ele of arr) cache.has(ele) ? cache.set(ele, cache.get(ele) + 1) : cache.set(ele, 1)
  const set = new Set([...cache.values()])
  // console.log(set, cache)

  return set.size == cache.size
}

test(
  uniqueOccurrences([1, 2, 2, 1, 1, 3]), // true
  uniqueOccurrences([1, 2]), // false
  uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) // true
)
