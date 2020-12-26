import test from '../test.js'
/*
  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
  n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
  Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

  Notice that you may not slant the container.

  Example 1:
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
      In this case, the max area of water the container can contain is 49.

  Example 2:
    Input: height = [1,1]
    Output: 1

  Example 3:
    Input: height = [4,3,2,1,4]
    Output: 16

  Example 4:
    Input: height = [1,2,1]
    Output: 2

  Constraints:
    n = height.length
    2 <= n <= 3 * 104
    0 <= height[i] <= 3 * 104
*/

function bruteForce (height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(Math.min(height[i], height[j]) * (j - i), max)
    }
  }
  return max
}

function solution (height) {
  let max = 0
  let l = 0
  let r = height.length - 1

  /*
    area between l ad r depends on the lower number
    moving the lower number pointer introduces the possibility to find a higher number
    which may offset the reduction in distance between l and r
  */
  while (l < r) {
    max = Math.max(Math.min(height[l], height[r]) * (r - l), max)
    height[l] < height[r]
      ? l++
      : r--
  }
  return max
}

test(
  bruteForce,
  [[1, 8, 6, 2, 5, 4, 8, 3, 7]], // 49
  [[1, 1]], // 1
  [[4, 3, 2, 1, 4]], // 16
  [[1, 2, 1]] // 2
)

test(
  solution,
  [[1, 8, 6, 2, 5, 4, 8, 3, 7]], // 49
  [[1, 1]], // 1
  [[4, 3, 2, 1, 4]], // 16
  [[1, 2, 1]] // 2
)
