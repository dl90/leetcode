'use strict'
const test = require('../test.js').test
/*
  The Tribonacci sequence Tn is defined as follows:
    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

  Given n, return the value of Tn.

  Example 1:
    Input: n = 4
    Output: 4
    Explanation:
      T_3 = 0 + 1 + 1 = 2
      T_4 = 1 + 1 + 2 = 4

  Example 2:
    Input: n = 25
    Output: 1389537

  Constraints:
    0 <= n <= 37
    The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

var tribonacci = function (n) {
  if (n === 0) return 0
  if (n < 3) return 1

  let zero = 0; let one = 1; let two = 1
  for (let i = 3; i <= n; i++) {
    const temp = zero + one + two;
    [zero, one, two] = [one, two, temp]
  }

  return two
}

function recursive (n) {
  if (n === 0) return 0
  if (n < 3) return 1

  return (recursive(n - 1) + recursive(n - 2) + recursive(n - 3))
}

function bottomUp (n) {
  const memo = new Map()

  let val
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      val = 0
    } else if (i < 3) {
      val = 1
    } else {
      val = memo.get(i - 1) + memo.get(i - 2) + memo.get(i - 3)
    }
    memo.set(i, val)
  }

  return memo.get(n)
}

(() => {
  const hrStart = process.hrtime()

  console.log(
    tribonacci(0),
    tribonacci(4),
    tribonacci(25),
    tribonacci(37)

    // recursive(0),
    // recursive(4),
    // recursive(25),
    // recursive(37),

    // bottomUp(0),
    // bottomUp(4),
    // bottomUp(25),
    // bottomUp(37),
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
