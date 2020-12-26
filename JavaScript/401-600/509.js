'use strict'
const test = require('../test.js').test
/*
  The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

    F(0) = 0,   F(1) = 1
    F(N) = F(N - 1) + F(N - 2), for N > 1.

  Given N, calculate F(N).

  Example 1:
    Input: 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

  Example 2:
    Input: 3
    Output: 2
    Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

  Example 3:
    Input: 4
    Output: 3
    Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

  Note: 0 ≤ N ≤ 30.
*/

var fib = function (N) {
  if (N < 1) return 0
  if (N < 3) return 1
  const res = fib(N - 1) + fib(N - 2)
  return res
}

function memoFib (N, memo = new Map()) {
  let res
  if (memo.has(N)) res = memo.get(N)
  else if (N < 1) res = 0
  else if (N < 3) res = 1
  else res = memoFib(N - 1, memo) + memoFib(N - 2, memo)
  memo.set(N, res)
  return res
}

function bottomUp (N) {
  let [res, one, two, temp] = [0, 1, 1]
  for (let i = 1; i <= N; i++) {
    if (i < 3) res = 1
    else {
      temp = one + two;
      [one, two, res] = [two, temp, temp]
    }
  }
  return res
}

test(
  fib,
  0, // 0
  1, // 1
  2, // 1
  3, // 2
  4, // 3
  30 // 832040
)

test(
  memoFib,
  0, // 0
  1, // 1
  2, // 1
  3, // 2
  4, // 3
  30 // 832040
)

test(
  bottomUp,
  0, // 0
  1, // 1
  2, // 1
  3, // 2
  4, // 3
  30 // 832040
)
