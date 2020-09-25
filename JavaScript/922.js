'use strict'
const test = require('./test.js').test
/*
  Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
  Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
  You may return any answer array that satisfies this condition.

  Example 1:
    Input: [4,2,5,7]
    Output: [4,5,2,7]
    Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

  Note:
    2 <= A.length <= 20000
    A.length % 2 == 0
    0 <= A[i] <= 1000
*/

var sortArrayByParityII = function (A) {
  /*
    [1, 3, 5, 0, 2, 4]

    [0, 3, 5, 1, 2, 4]: i = 0, j = 3, swap
    [0, 3, 4, 1, 2, 5]: i = 2, j = 5, swap

    two pointer i (even) and j (odd)
    if A[i] !== even (A[i] ^ 1) + 1 === A[i] => odd
    loop through odd positions (A[j]) looking for even values
    swap if found
  */
  for (let i = 0, j = 1; i < A.length; i += 2) {
    // if ((A[i] ^ 1) + 1 === A[i]) {
    if (A[i] % 2) {
      // while ((A[j] ^ 1) + 1 === A[j] && j < A.length) j += 2;
      while (A[j] % 2 && j < A.length) j += 2;
      [A[i], A[j]] = [A[j], A[i]]
    }
  }
  return A
}

test(
  sortArrayByParityII,
  [[4, 2, 5, 7]], // [4,5,2,7]
  [[1, 3, 5, 0, 2, 4]], // [ 0, 3, 4, 1, 2, 5 ]
  [[1, 0]] // [0,1]
)
