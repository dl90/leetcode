'use strict'
const test = require('../test.js').test
/*
  Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
  Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

  Example 1:
    Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    Output: [2,2,2,1,4,3,3,9,6,7,19]

  Constraints:
    arr1.length, arr2.length <= 1000
    0 <= arr1[i], arr2[i] <= 1000
    Each arr2[i] is distinct.
    Each arr2[i] is in arr1.
*/

var relativeSortArray = function (arr1, arr2) {
  const map = new Map()
  arr2.forEach(val => map.set(val, true))

  const seg2 = []
  const seg1 = arr1.filter(val => { return map.has(val) ? true : (seg2.push(val), false) })

  seg2.sort((a, b) => a - b)
  let target; let temp; let pointer = 0
  for (let i = 0; i < arr2.length; i++) {
    target = arr2[i]
    for (let j = pointer + 1; j < seg1.length; j++) {
      if (seg1[pointer] == target) {
        pointer++
        continue
      }

      if (seg1[j] == target) {
        temp = seg1[pointer]
        seg1[pointer] = seg1[j]
        seg1[j] = temp
        pointer++
      }
    }
  }

  return [...seg1, ...seg2]
}

function relativeSortArray1 (arr1, arr2) {
  let target; let temp; let pointer = 0

  for (let i = 0; i < arr2.length; i++) {
    target = arr2[i]
    for (let j = pointer + 1; j < arr1.length; j++) {
      if (arr1[pointer] === target) {
        pointer++
        j++
        continue
      }

      if (arr1[j] === target) {
        temp = arr1[pointer]
        arr1[pointer] = arr1[j]
        arr1[j] = temp
        pointer++
      }
    }
  }

  const remain = arr1.slice(pointer)
  arr1.length = pointer
  remain.sort((a, b) => a - b)

  return [...arr1, ...remain]
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    // relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]), // [2,2,2,1,4,3,3,9,6,7,19]
    // relativeSortArray([33, 22, 48, 4, 39, 36, 41, 47, 15, 45], [22, 33, 48, 4]), // [22,33,48,4,15,36,39,41,45,47]

    // relativeSortArray1([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]), // [2,2,2,1,4,3,3,9,6,7,19]
    relativeSortArray1([33, 22, 48, 4, 39, 36, 41, 47, 15, 45], [22, 33, 48, 4]) // [22,33,48,4,15,36,39,41,45,47]
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
