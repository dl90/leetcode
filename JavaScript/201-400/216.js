'use strict'
const test = require('../test.js').test
/*
  Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

  Note:
    All numbers will be positive integers.
    The solution set must not contain duplicate combinations.

  Example 1:
    Input: k = 3, n = 7
    Output: [[1,2,4]]

  Example 2:
    Input: k = 3, n = 9
    Output: [[1,2,6], [1,3,5], [2,3,4]]
*/

var combinationSum3 = function (k, n) {
  const res = []

  function dfs (arr, idx, sum = 0) {
    if (arr.length === k && sum === n) {
      res.push([...arr])
      return
    } else if (sum > n || arr.length === k) return

    for (let i = idx; i < 10; i++) {
      if (sum + i <= n) dfs([...arr, i], i + 1, sum + i)
    }
  }

  dfs([], 1)
  return res
}

function alt (k, n) {
  const cur = []
  const res = []

  function find (start, curSum) {
    if (cur.length === k && curSum === n) {
      res.push([...cur])
      return
    } else if (curSum < 0 || cur.length === k) return

    for (let i = start; i <= 9; i++) {
      cur.push(i)
      find(i + 1, curSum + i)
      cur.pop()
    }
  }

  find(1, 0)
  return res
}

var fastest = function (k, n) {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const res = []
  helper(res, candidates, k, n)
  return res

  function helper (res, candidates, maxLength, target, path = [], idx = 0) {
    if (target < 0) return
    if (path.length > maxLength) return
    if (target === 0 && path.length === maxLength) {
      res.push(path)
      return
    }
    for (let i = idx; i < candidates.length; i++) {
      const curr = candidates[i]
      const newTarget = target - curr
      helper(res, candidates, maxLength, newTarget, [...path, curr], i + 1)
    }
  }
}

test(
  combinationSum3,
  [3, 9], // [1,2,6],[1,3,5],[2,3,4]]
  [3, 10], // [[1,2,7],[1,3,6],[1,4,5],[2,3,5]]
  [3, 11], // [[1,2,8],[1,3,7],[1,4,6],[2,3,6],[2,4,5]]
  [3, 12] // [[1,2,9],[1,3,8],[1,4,7],[1,5,6],[2,3,7],[2,4,6],[3,4,5]]
)

test(
  alt,
  [3, 9], // [1,2,6],[1,3,5],[2,3,4]]
  [3, 10], // [[1,2,7],[1,3,6],[1,4,5],[2,3,5]]
  [3, 11], // [[1,2,8],[1,3,7],[1,4,6],[2,3,6],[2,4,5]]
  [3, 12] // [[1,2,9],[1,3,8],[1,4,7],[1,5,6],[2,3,7],[2,4,6],[3,4,5]]
)

test(
  fastest,
  [3, 9], // [1,2,6],[1,3,5],[2,3,4]]
  [3, 10], // [[1,2,7],[1,3,6],[1,4,5],[2,3,5]]
  [3, 11], // [[1,2,8],[1,3,7],[1,4,6],[2,3,6],[2,4,5]]
  [3, 12] // [[1,2,9],[1,3,8],[1,4,7],[1,5,6],[2,3,7],[2,4,6],[3,4,5]]
)
