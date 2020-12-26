'use strict'
const test = require('../test.js').test
/*
  We have an array A of integers, and an array queries of queries.
  For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].
  Then, the answer to the i-th query is the sum of the even values of A.
  (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)
  Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

  Example 1:
    Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
    Output: [8,6,2,4]
    Explanation:
      At the beginning, the array is [1,2,3,4].
      After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is 2 + 2 + 4 = 8.
      After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values is 2 + 4 = 6.
      After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values is -2 + 4 = 2.
      After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values is -2 + 6 = 4.

  Note:
    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    1 <= queries.length <= 10000
    -10000 <= queries[i][0] <= 10000
    0 <= queries[i][1] < A.length
*/

var sumEvenAfterQueries = function (A, queries) {
  const res = []

  let [val, j] = []
  for (let i = 0; i < queries.length; i++) {
    [val, j] = queries[i]
    A[j] += val

    // even values
    const resVal = A.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc, 0)
    res.push(resVal)
  }
  return res
}

function faster (A, queries) {
  const res = []
  let [sum, val, idx, valOdd] = [0]

  //  we track and change the even numbers
  A.forEach(val => { if (!(val % 2)) sum += val })
  for (let i = 0; i < queries.length; i++) {
    [val, idx] = queries[i]
    valOdd = val % 2

    // if (A[idx] % 2 && val % 2) {
    //   sum += A[idx] + val;
    // }

    // if (A[idx] % 2 == 0 && val % 2 == 0) {
    //   sum += val;
    // }

    // if (A[idx] % 2 == 0 && val % 2) {
    //   sum -= A[idx];
    // }

    if (A[idx] % 2) {
      if (valOdd) sum += A[idx] + val
    } else {
      valOdd ? sum -= A[idx] : sum += val
    }

    A[idx] += val
    res.push(sum)
  }
  return res
}

test(
  sumEvenAfterQueries,
  [[1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]], // [8,6,2,4]
  [[1], [[4, 0]]], // [0]
  [[3, 2], [[4, 0], [3, 0]]] // [2,12]
)

test(
  faster,
  [[1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]], // [8,6,2,4]
  [[1], [[4, 0]]], // [0]
  [[3, 2], [[4, 0], [3, 0]]] // [2,12]
)
