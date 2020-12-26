'use strict'
const test = require('../test.js').test
/*
  Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

  Example 1:
    Input: [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

  Example 2:
    Input: [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

  Example 3:
    Input: [[1,2],[2,3]]
    Output: 0
    Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

  Note:
    You may assume the interval's end point is always bigger than its start point.
    Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
*/

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return 0
  intervals.sort((a, b) => a[1] - b[1])
  /*
    [[2, 4], [2, 3], [1, 2], [3, 4]]

    sort by start:
    [[1, 2], [2, 4], [2, 3], [3, 4]]
    if we take [2, 4] the remaining 2 sets will overlap, count = 2, which would not be the minimum

    sort by end:
    [[1, 2], [2, 3], [2, 4], [3, 4]]
    [2, 4] overlaps while [3, 4] is good, count = 1
  */

  let ceil = intervals[0][1]; let count = -1
  for (const [head, tail] of intervals) {
    head < ceil ? count++ : ceil = tail
  }
  return count
}

test(
  eraseOverlapIntervals,
  [[[1, 2], [2, 3], [3, 4], [1, 3]]], // 1
  [[[1, 100], [11, 22], [1, 11], [2, 12]]] // 2
)
