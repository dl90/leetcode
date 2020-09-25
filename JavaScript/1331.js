'use strict'
const test = require('./test.js').test
/*
  Given an array of integers arr, replace each element with its rank. The rank represents how large the element is.

  The rank has the following rules:
    Rank is an integer starting from 1.
    The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
    Rank should be as small as possible.

  Example 1:
    Input: arr = [40,10,20,30]
    Output: [4,1,2,3]
    Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

  Example 2:
    Input: arr = [100,100,100]
    Output: [1,1,1]
    Explanation: Same elements share the same rank.

  Example 3:
    Input: arr = [37,12,28,9,100,56,80,5,12]
    Output: [5,3,4,2,8,6,7,1,3]

  Constraints:
    0 <= arr.length <= 105
    -109 <= arr[i] <= 109

  Use a temporary array to copy the array and sort it.
  The rank of each element is the number of elements smaller than it in the sorted array plus one.
*/

var arrayRankTransform = function (arr) {
  const len = arr.length
  if (len == 0) return []
  if (len == 1) return [1]
  const sorted = Array.from(new Set(arr)).sort((a, b) => { return a - b })
  const cache = new Map()

  sorted.forEach((val, idx) => cache.set(val, idx + 1))
  const res = arr.map((ele) => ele = cache.get(ele))
  return res
}

test(
  arrayRankTransform([40, 10, 20, 30]), // [4,1,2,3]
  arrayRankTransform([100, 100, 100]), // [1,1,1]
  arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]) // [5,3,4,2,8,6,7,1,3]
)
