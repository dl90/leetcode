import { test } from '../test.js'
/*
  Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
  You may assume that the intervals were initially sorted according to their start times.

  Example 1:
    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]

  Example 2:
    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    Output: [[1,2],[3,10],[12,16]]
    Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

  NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  const res = []
  let early = false
  let i

  for (i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i]
    if (newInterval[0] > end) res.push(intervals[i])
    else if (newInterval[1] < start) {
      res.push(newInterval)
      early = true
      break
    } else {
      newInterval[0] = Math.min(newInterval[0], start)
      newInterval[1] = Math.max(newInterval[1], end)
    }
  }

  if (early) return res.concat(intervals.splice(i))
  else {
    res.push(newInterval)
    return res
  }
}

test(
  insert,
  [[[1, 3], [6, 9]], [2, 5]], // [[1,5],[6,9]]
  [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], // [[1,2],[3,10],[12,16]]
  [[], [1, 2]], // [[1,2]]
  [[[1, 5]], [2, 3]], // [[1, 5]]
  [[[1, 5]], [2, 7]], // [[1, 7]]
  [[[1, 5]], [5, 7]], // [[1, 7]]
  [[[1, 5]], [6, 8]], // [[1, 5], [6, 8]]
  [[[1, 2], [3, 4]], [6, 8]] // [[1,2],[3,4],[6,8]]
)
