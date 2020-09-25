'use strict'
const test = require('./test.js').test
/*
  On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
  Once you pay the cost, you can either climb one or two steps.
  You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

  Example 1:
    Input: cost = [10, 15, 20]
    Output: 15
    Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

  Example 2:
    Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    Output: 6
    Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

  Note:
    cost will have a length in the range [2, 1000].
    Every cost[i] will be an integer in the range [0, 999].

  Say f[i] is the final cost to climb to the top from step i. Then f[i] = cost[i] + min(f[i+1], f[i+2]).
*/

var minCostClimbingStairs = function (cost) {
  const len = cost.length
  if (len === 2) return Math.min(...cost)

  const arr = []
  arr[0] = cost[0]
  arr[1] = cost[1]

  let a, b
  for (let i = 2; i < len; i++) {
    a = cost[i] + arr[i - 2]
    b = cost[i] + arr[i - 1]
    a < b ? arr[i] = a : arr[i] = b
  }
  return Math.min(arr[len - 1], arr[len - 2])
}

function inPlace (cost) {
  const len = cost.length
  if (len === 2) return Math.min(...cost)

  for (let i = 2; i < len; i++) {
    cost[i] = Math.min(cost[i - 2], cost[i - 1]) + cost[i]
  }
  return Math.min(cost[len - 2], cost[len - 1])
}

function noArr (cost) {
  const len = cost.length
  if (len === 2) return Math.min(...cost)

  let [val1, val2, x] = [cost[0], cost[1], null]
  for (let i = 2; i < len; i++) {
    x = Math.min(val1, val2) + cost[i]
    val1 = val2
    val2 = x
  }
  return Math.min(val1, val2)
}

test(
  minCostClimbingStairs,
  [[10, 15, 20]], // 15
  [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]] // 6
)

test(
  inPlace,
  [[10, 15, 20]], // 15
  [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]] // 6
)

test(
  noArr,
  [[10, 15, 20]], // 15
  [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]] // 6
)
