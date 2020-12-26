'use strict'
const test = require('../test.js').test
/*
  Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

  For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

  Note:
    You may assume the interval's end point is always bigger than its start point.
    You may assume none of these intervals have the same start point.

  Example 1:
    Input: [ [1,2] ]
    Output: [-1]
    Explanation: There is only one interval in the collection, so it outputs -1.

  Example 2:
    Input: [ [3,4], [2,3], [1,2] ]
    Output: [-1, 0, 1]
    Explanation: There is no satisfied "right" interval for [3,4].
      For [2,3], the interval [3,4] has minimum-"right" start point;
      For [1,2], the interval [2,3] has minimum-"right" start point.

  Example 3:
    Input: [ [1,4], [2,3], [3,4] ]
    Output: [-1, 2, -1]
    Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
      For [2,3], the interval [3,4] has minimum-"right" start point.
*/

var findRightInterval = function (intervals) {
  const sortIndexed = intervals.map(([head, _], idx) => [head, idx]).sort((a, b) => a[0] - b[0])
  const res = new Array(intervals.length).fill(-1)

  for (let i = 0; i < intervals.length; i++) {
    for (let j = intervals.length - 1; j >= 0; j--) {
      if (sortIndexed[j][0] >= intervals[i][1]) res[i] = sortIndexed[j][1]
    }
  }

  return res
}

function binarySearch (intervals) {
  const sortIndexed = intervals.map(([head, _], idx) => [head, idx]).sort((a, b) => a[0] - b[0])
  const res = new Array(intervals.length).fill(-1)

  let curr, left, right, mid
  for (let i = 0; i < intervals.length; i++) {
    curr = intervals[i][1]
    left = 0
    right = intervals.length - 1

    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      const [val, idx] = sortIndexed[mid]
      if (val === curr && idx !== i) { res[i] = idx; break }
      if (val > curr) { res[i] = idx; right = mid - 1 } else left = mid + 1
    }
  }
  return res
};

test(
  findRightInterval,
  [[[3, 4], [2, 3], [1, 2]]], // [-1, 0, 1]
  [[[1, 4], [2, 3], [3, 4]]] // [-1, 2, -1]
)

test(
  binarySearch,
  [[[3, 4], [2, 3], [1, 2]]], // [-1, 0, 1]
  [[[1, 4], [2, 3], [3, 4]]] // [-1, 2, -1]
)
