'use strict'
const test = require('../test.js').test
/*
  Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
  Note that elements beyond the length of the original array are not written.
  Do the above modifications to the input array in place, do not return anything from your function.

  Example 1:
    Input: [1,0,2,3,0,4,5,0]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

  Example 2:
    Input: [1,2,3]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,2,3]

  Note:
    1 <= arr.length <= 10000
    0 <= arr[i] <= 9
*/

var duplicateZeros = function (arr) {
  const cache = []
  let pointer = 0
  for (let i = 0; i < arr.length; i++) {
    cache.push(arr[i])
    if (!arr[i]) cache.push(arr[i])
    arr[i] = cache[pointer]
    pointer++
  }
}

const arr1 = [1, 0, 2, 3, 0, 4, 5, 0]
const arr2 = [1, 2, 3]

test(
  duplicateZeros(arr1),
  console.log(arr1), // [1,0,0,2,3,0,0,4]

  duplicateZeros(arr2),
  console.log(arr2) // [1,2,3]
)
