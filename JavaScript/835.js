'use strict'
const test = require('./test.js').test
// @TODO
/*
  Two images A and B are given, represented as binary, square matrices of the same size. (A binary matrix has only 0s and 1s as values.)

  We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.
  (Note also that a translation does not include any kind of rotation.)

  What is the largest possible overlap?

  Example 1:
    Input: A = [[1,1,0],
                [0,1,0],
                [0,1,0]]
           B = [[0,0,0],
                [0,1,1],
                [0,0,1]]
    Output: 3
    Explanation: We slide A to right by 1 unit and down by 1 unit.

  Notes:
    1 <= A.length = A[0].length = B.length = B[0].length <= 30
    0 <= A[i][j], B[i][j] <= 1
*/

var largestOverlap = function (A, B) {
  /*
    sliding y
    1 1 0    0 0 1    0 1 1    0 0 0
    0 1 0             0 0 1    0 1 1    0 0 0
    0 1 0                      0 0 1    0 1 1    0 0 0

    sliding x
    1 1 0    0        0 0      0 0 0    0 0      0
    0 1 0    1        1 1      0 1 1    0 1      0
    0 1 0    1        0 1      0 0 1    0 0      0

    to check all, need to slide both x and y (slide though x for each y slide)
  */
  const length = A.length
  let max = 0
  for (let y = -length + 1; y < length; y++) {
    for (let x = -length + 1; x < length; x++) {
      max = Math.max(max, getOverlap(y, x))
    }
  }
  return max

  function getOverlap (rowOffset, colOffset) {
    let res = 0
    let offsetI
    let offsetJ

    for (let i = 0; i < length; i++) {
      offsetI = i + rowOffset
      if (offsetI < 0 || offsetI >= length) continue
      for (let j = 0; j < length; j++) {
        offsetJ = j + colOffset
        if (offsetJ < 0 || offsetJ >= length) continue
        if (A[offsetI][offsetJ] & B[i][j]) res++
      }
    }
    return res
  }
}

test(
  largestOverlap,
  [[[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]]]
)
