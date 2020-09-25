import { test } from './test.js'
/*
  You are climbing a stair case. It takes n steps to reach to the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

  Example 1:
    Input: 2
    Output: 2
    Explanation: There are two ways to climb to the top.
      1. 1 step + 1 step
      2. 2 steps

  Example 2:
    Input: 3
    Output: 3
    Explanation: There are three ways to climb to the top.
      1. 1 step + 1 step + 1 step
      2. 1 step + 2 steps
      3. 2 steps + 1 step

  Constraints: 1 <= n <= 45
*/

var climbStairs = function (n) {
  const arr = [0, 1, 2, 3]

  for (let i = 4; i <= n; i++) {
    if (arr[n]) return arr[n]
    arr[i] = arr[i - 2] + arr[i - 1]
  }

  return arr[n]
}

function recursive (n) {
  const map = new Map()

  function subroutine (n) {
    if (n <= 3) return n
    if (map.has(n)) return map.get(n)

    const val = subroutine(n - 2) + subroutine(n - 1)
    map.set(n, val)
    return val
  }

  subroutine(n)
  return map.get(n)
}

function optimized (n) {
  let a = 1
  let b = 2

  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return n === 1 ? a : b
};

test(
  climbStairs,
  45, // 1836311903
  50, // 20365011074
  100 // 573147844013817200000
)

test(
  recursive,
  45, // 1836311903
  50, // 20365011074
  100 // 573147844013817200000
)

test(
  optimized,
  45, // 1836311903
  50, // 20365011074
  100 // 573147844013817200000
)
