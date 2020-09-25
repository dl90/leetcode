'use strict'
const test = require('./test.js').test
/*
  Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation
  and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
  Return the sorted array.

  Example 1:
    Input: arr = [0,1,2,3,4,5,6,7,8]
    Output: [0,1,2,4,8,3,5,6,7]
    Explanation: [0] is the only integer with 0 bits.
      [1,2,4,8] all have 1 bit.
      [3,5,6] have 2 bits.
      [7] has 3 bits.
      The sorted array by bits is [0,1,2,4,8,3,5,6,7]

  Example 2:
    Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
    Output: [1,2,4,8,16,32,64,128,256,512,1024]
    Explanation: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

  Example 3:
    Input: arr = [10000,10000]
    Output: [10000,10000]

  Example 4:
    Input: arr = [2,3,5,7,11,13,17,19]
    Output: [2,3,5,17,7,11,13,19]

  Example 5:
    Input: arr = [10,100,1000,10000]
    Output: [10,100,10000,1000]

  Constraints:
    1 <= arr.length <= 500
    0 <= arr[i] <= 10^4
*/

var sortByBits = function (arr) {
  const cache = new Map()
  let _a, _b

  return arr.sort((a, b) => {
    _a = check(a)
    _b = check(b)
    return (_a != _b) ? _a - _b : a - b
  })

  function check (key, val) {
    if (cache.has(key)) val = cache.get(key)
    else {
      // val = [...key.toString(2)].filter(x => x == 1).length;
      val = key.toString(2).replace(/0/g, '').length
      cache.set(key, val)
    }
    return val
  }
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]) // [0,1,2,4,8,3,5,6,7]
    // sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), // [1,2,4,8,16,32,64,128,256,512,1024]
    // sortByBits([10000, 10000]), // [10000,10000]
    // sortByBits([2, 3, 5, 7, 11, 13, 17, 19]), // [2,3,5,17,7,11,13,19]
    // sortByBits([10, 100, 1000, 10000]), // [10,100,10000,1000]
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
