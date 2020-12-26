import { test } from '../test.js'
/*
  Given a list of intervals, remove all intervals that are covered by another interval in the list.
  Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
  After doing so, return the number of remaining intervals.

  Example 1:
    Input: intervals = [[1,4],[3,6],[2,8]]
    Output: 2
    Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

  Example 2:
    Input: intervals = [[1,4],[2,3]]
    Output: 1

  Example 3:
    Input: intervals = [[0,10],[5,12]]
    Output: 2

  Example 4:
    Input: intervals = [[3,10],[4,10],[5,11]]
    Output: 2

  Example 5:
    Input: intervals = [[1,2],[1,4],[3,4]]
    Output: 1

  Constraints:
    1 <= intervals.length <= 1000
    intervals[i].length == 2
    0 <= intervals[i][0] < intervals[i][1] <= 10^5
    All the intervals are unique.
*/

var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let count = intervals.length
  let prev = 0

  for (let i = 1; i < intervals.length; i++) {
    const [prevStart, prevEnd] = intervals[prev]
    const [curStart, curEnd] = intervals[i]
    if (prevStart <= curStart && prevEnd >= curEnd) count--
    else prev = i
  }
  return count
}

test(
  removeCoveredIntervals,
  [[[1, 4], [3, 6], [2, 8]]], // 2
  [[[3, 10], [4, 10], [5, 11]]], // 2
  [[[0, 10], [5, 12]]], // 2
  [[[1, 4], [2, 3]]], // 1
  [[[1, 2], [1, 4], [3, 4]]], // 2
  [[[34335, 39239], [15875, 91969], [29673, 66453], [53548, 69161], [40618, 93111]]] // 2
)
