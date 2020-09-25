'use strict'
const test = require('./test.js').test
/*
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Example:
    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]

  Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
*/

var moveZeroes = function (nums) {
  const len = nums.length
  if (len < 2) return nums

  /*
    delayed window

    [0, 1, 0, 3, 12]
    [[0, 1]], 0, 3, 12

    [[1, 0]], 0, 3, 12
    1, [[0, 0]], 3, 12

    1, [[0, 0, 3]], 12
    1, [[3, 0, 0]], 12

    1, 3, [[0, 0, 12]]
    1, 3, [[12, 0, 0]]

    [1, 3, 12, 0, 0]
  */

  let x = 0; let y = 1
  let numX, numY
  while (y < len) {
    numX = nums[x]
    numY = nums[y]

    // if (numX == 0 && numY != 0) {
    //   nums[x] = nums[y];
    //   nums[y] = 0;
    //   x++;
    //   y++;
    // }

    // if (numX != 0 && numY == 0) {
    //   x++;
    //   y++;
    // }

    // if (numX != 0 && numY != 0) {
    //   x++;
    //   y++;
    // }

    // if (numX == 0 && numY == 0) y++;

    if (numX === 0 && numY !== 0) {
      nums[x] = nums[y]
      nums[y] = 0
      x++
    } else if (numX !== 0 && numY !== 0) {
      x++
    }
    y++
  }
  return nums
}

function alt (nums) {
  const len = nums.length
  if (len < 2) return nums

  const res = []
  let counter = 0
  for (let i = 0; i < len; i++) {
    nums[i] !== 0 ? res.push(nums[i]) : counter++
  }
  return res.concat(new Array(counter).fill(0))
};

test(
  moveZeroes,
  [[0, 1, 0, 3, 12]], // [1,3,12,0,0]
  [[0, 1, 0, 3, 12, 0, 1, 0, 3, 12, 0, 1, 0, 3, 12, 0, 1, 0, 3, 12]] // [1,3,12,1,3,12,1,3,12,1,3,12,0,0,0,0,0,0,0,0]
)

test(
  alt,
  [[0, 1, 0, 3, 12]], // [1,3,12,0,0]
  [[0, 1, 0, 3, 12, 0, 1, 0, 3, 12, 0, 1, 0, 3, 12, 0, 1, 0, 3, 12]] // [1,3,12,1,3,12,1,3,12,1,3,12,0,0,0,0,0,0,0,0]
)
