'use strict'
const test = require('./test.js').test
/*
  Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
  The distance value is defined as the number of elements in arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

  Example 1:
    Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
    Output: 2
    Explanation:
    For arr1[0]=4 we have:
      |4-10|=6 > d=2
      |4-9|=5 > d=2
      |4-1|=3 > d=2
      |4-8|=4 > d=2
    For arr1[1]=5 we have:
      |5-10|=5 > d=2
      |5-9|=4 > d=2
      |5-1|=4 > d=2
      |5-8|=3 > d=2
    For arr1[2]=8 we have:
      |8-10|=2 <= d=2
      |8-9|=1 <= d=2
      |8-1|=7 > d=2
      |8-8|=0 <= d=2

  Example 2:
    Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
    Output: 2

  Example 3:
    Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
    Output: 1

  Constraints:
    1 <= arr1.length, arr2.length <= 500
    -10^3 <= arr1[i], arr2[j] <= 10^3
    0 <= d <= 100
*/

var findTheDistanceValue = function (arr1, arr2, d) {
  const len1 = arr1.length
  const len2 = arr2.length

  let count = 0
  for (let i = 0; i < len1; i++) {
    let flag = true
    for (let j = 0; j < len2; j++) {
      // |arr1[i] - arr2[j]|
      const num = (arr1[i] > arr2[j]) ? (arr1[i] - arr2[j]) : (arr2[j] - arr1[i])
      /*
        if theres an element with a difference <= d
        break out of inner loop (no point continuing)
        count does not get incremented
      */
      if (num <= d) {
        flag = false
        break
      }
    }
    if (flag) count++
  }
  return count
}

function sortedBinarySearch (arr1, arr2, d) {
  const len1 = arr1.length
  const len2 = arr2.length

  const sorted2 = arr2.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < len1; i++) {
    const val1 = arr1[i]
    let start = 0
    let end = len2
    let flag = true

    while (start <= end) {
      const mid = parseInt(start + (end - start) / 2)
      const val2 = sorted2[mid]
      // |arr1[i] - arr2[j]|
      const num = (val1 > val2) ? (val1 - val2) : (val2 - val1)

      /*
        binary search
        compare  mid of sorted array (arr2) against iterating arr1 value
        1. checks against trigger and same value
        2. if arr2 mid val is > arr1 val, reassigns end and re-calcs mid
        3. if arr2 mid val is < arr1 val, reassigns start and re-calcs mid
      */
      if (num <= d || val1 == val2) {
        flag = false
        break
      } else if (val1 < val2) {
        end = mid - 1
      } else if (val1 > val2) {
        start = mid + 1
      } else {
        break
      }
    }
    if (flag) count++
  }
  return count
};

test(
  findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2), // 2
  sortedBinarySearch([4, 5, 8], [10, 9, 1, 8], 2), // 2

  findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3), // 2
  sortedBinarySearch([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3), // 2

  findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6), // 1
  sortedBinarySearch([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6) // 1
)
