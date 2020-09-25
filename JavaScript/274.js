'use strict'
const test = require('./test.js').test
/*
  Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.
  According to the definition of h-index on Wikipedia:
    "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

  Example:
    Input: citations = [3,0,6,1,5]
    Output: 3
    Explanation:
      [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
      Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, her h-index is 3.

   Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

var hIndex = function (citations) {
  if (!citations || !citations.length) return 0
  /*
    [3, 0, 6, 1, 5]
    [0, 1, 3, 5, 6]
    all 5 papers have 0 or more citations
    4 papers have more than 1 citation
    ...
  */
  citations.sort((a, b) => a - b)
  let idx = 0; const n = citations.length - 1
  while (idx <= n && citations[n - idx] > idx) idx++
  return idx
}

function countingSort (citations) {
  if (!citations || !citations.length) return 0

  const len = citations.length
  const arr = new Int8Array(len + 1)

  // populate arr
  for (let i = 0; i < len; i++) arr[Math.min(len, citations[i])]++

  /*
    checking sum against index (in reverse)
    [ 1, 1, 0, 1, 0, 2 ]
    [ 5, 4, 3, 3, 2, 2 ]
    2 papers have more than 5 citations
    3 papers have more than 3 citations
    4 papers have more than 1 citation
   */
  let count = 0
  for (let i = len; i > -1; i--) {
    count += arr[i]
    if (count >= i) return i
  }
  return 0
};

test(
  hIndex,
  [[3, 0, 6, 1, 5]], // 3
  [[100, 100]], // 2
  [[1, 1]], // 1
  [[0]] // 0
)

test(
  countingSort,
  [[3, 0, 6, 1, 5]], // 3
  [[100, 100]], // 2
  [[1, 1]], // 1
  [[0]] // 0
)
