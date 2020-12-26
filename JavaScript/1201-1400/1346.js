'use strict'
const test = require('../test.js').test
/*
  Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
  More formally check if there exists two indices i and j such that :
    i != j
    0 <= i, j < arr.length
    arr[i] == 2 * arr[j]

  Example 1:
    Input: arr = [10,2,5,3]
    Output: true
    Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

  Example 2:
    Input: arr = [7,1,14,11]
    Output: true
    Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

  Example 3:
    Input: arr = [3,1,7,11]
    Output: false
    Explanation: In this case does not exist N and M, such that N = 2 * M.

  Constraints:
    2 <= arr.length <= 500
    -10^3 <= arr[i] <= 10^3

  Loop from i = 0 to arr.length, maintaining in a hashTable the array elements from [0, i - 1].
  On each step of the loop check if we have seen the element 2 * arr[i] so far or arr[i] / 2 was seen if arr[i] % 2 == 0
*/

var checkIfExist = function (arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const ele = arr[i]
    if (arr.includes(2 * ele) && arr.indexOf(ele) !== arr.lastIndexOf(2 * ele)) return true
  }
  return false
}

function memo (arr) {
  const len = arr.length
  const memo = new Map()

  for (let i = 0; i < len; i++) {
    const ele = arr[i]
    if (memo.has(2 * ele) || memo.has(ele / 2)) {
      return true
    }
    memo.has(ele) ? null : memo.set(ele, true)
  }
  return false
};

function brute (arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) return true
    }
  }
  return false
};

test(
  checkIfExist([1, 3, 4, 5, 7, 9, 11, 2, 13]), // true
  memo([1, 3, 4, 5, 7, 9, 11, 2, 13]), // true
  brute([1, 3, 4, 5, 7, 9, 11, 2, 13]) // true
)
