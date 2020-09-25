import { test } from './test.js'
/*
  Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.
  Return the minimum cost of deletions such that there are no two identical letters next to each other.

  Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.

  Example 1:
    Input: s = "abaac", cost = [1,2,3,4,5]
    Output: 3
    Explanation: Delete the letter "a" with cost 3 to get "abac" (String without two identical letters next to each other).

  Example 2:
    Input: s = "abc", cost = [1,2,3]
    Output: 0
    Explanation: You don't need to delete any character because there are no identical letters next to each other.

  Example 3:
    Input: s = "aabaa", cost = [1,2,3,4,1]
    Output: 2
    Explanation: Delete the first and the last character, getting the string ("aba").

  Constraints:
    s.length == cost.length
    1 <= s.length, cost.length <= 10^5
    1 <= cost[i] <= 10^4
    s contains only lowercase English letters.

  Maintain the running sum and max value for repeated letters.
*/

var minCost = function (s, cost) {
  const len = cost.length
  if (len < 2) return 0
  const arr = []
  let res = 0

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      res += Math.min(arr[arr.length - 1] ?? cost[i], cost[i + 1])
      arr.push(Math.max(arr[arr.length - 1] ?? cost[i], cost[i + 1]))
    } else arr.push(cost[i + 1])
  }
  return res
}

function optimized (s, cost) {
  const len = cost.length
  if (len < 2) return 0
  let [count, max, val] = [0, cost[0]]

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      val = cost[i + 1]
      if (max > val) count += val
      else {
        count += max
        max = val
      }
    } else max = cost[i + 1]
  }
  return count
}

test(
  minCost,
  ['abaac', [1, 2, 3, 4, 5]], // 3
  ['abc', [1, 2, 3]], // 0
  ['aabaa', [1, 2, 3, 4, 1]], // 2
  ['aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]] // 26
)

test(
  optimized,
  ['abaac', [1, 2, 3, 4, 5]], // 3
  ['abc', [1, 2, 3]], // 0
  ['aabaa', [1, 2, 3, 4, 1]], // 2
  ['aaabbbabbbb', [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]] // 26
)
