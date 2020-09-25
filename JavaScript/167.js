'use strict'
const test = require('./test.js').test
/*
  Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
  The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

  Note:
    Your returned answers (both index1 and index2) are not zero-based.
    You may assume that each input would have exactly one solution and you may not use the same element twice.

  Example 1:
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

  Example 2:
    Input: numbers = [2,3,4], target = 6
    Output: [1,3]

  Example 3:
    Input: numbers = [-1,0], target = -1
    Output: [1,2]

  Constraints:
    2 <= nums.length <= 3 * 104
    -1000 <= nums[i] <= 1000
    nums is sorted in increasing order.
    -1000 <= target <= 1000
*/

var twoSum = function (numbers, target) {
  const len = numbers.length

  for (let i = 0, j; i < len; i++) {
    if (numbers[i] + numbers[j] < target) continue
    j = len - 1
    while (i < j) {
      if (numbers[i] + numbers[j] < target) break
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
      j--
    }
  }
}

function twoPointer (numbers, target) {
  let [i, j] = [0, numbers.length - 1]

  while (i < j) {
    if (numbers[i] + numbers[j] < target) {
      i++
      j = numbers.length - 1
    } else if (numbers[i] + numbers[j] > target) j--
    else if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
  }
}

function map (numbers, target) {
  const len = numbers.length
  const map = new Map()
  let temp

  for (let i = 0; i < len; i++) {
    temp = target - numbers[i]
    if (map.has(numbers[i])) return [map.get(numbers[i]) + 1, i + 1]
    map.set(temp, i)
  }
}

test(
  twoSum,
  [[2, 7, 11, 15], 9], // [1,2]
  [[2, 3, 4], 6], // [1,3]
  [[-1, 0], -1], // [1,2]
  [[3, 24, 50, 79, 88, 150, 345], 200] // [3,6]
)

test(
  twoPointer,
  [[2, 7, 11, 15], 9], // [1,2]
  [[2, 3, 4], 6], // [1,3]
  [[-1, 0], -1], // [1,2]
  [[3, 24, 50, 79, 88, 150, 345], 200] // [3,6]
)

test(
  map,
  [[2, 7, 11, 15], 9], // [1,2]
  [[2, 3, 4], 6], // [1,3]
  [[-1, 0], -1], // [1,2]
  [[3, 24, 50, 79, 88, 150, 345], 200] // [3,6]
)
