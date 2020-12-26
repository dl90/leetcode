import { test } from '../test.js'
/*
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.
  Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

  Example 1:
    Input: [2,2,1]
    Output: 1

  Example 2:
    Input: [4,1,2,1,2]
    Output: 4
 */

var singleNumber = function (nums) {
  /*
    XOR operation
      1111 (15)
      0001 (1)
    ------- XOR (numX ^ num Y) => one or the other but not both
      1110 (14)

    XOR-ing the same number twice negates any changes
    NOTE: Numbers with more than 32 bits get their most significant bits discarded
  */
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 2147483647 && nums[i] >= -2147483647) res ^= nums[i]
  }
  return res
}

function foreach (nums) {
  let res = 0
  nums.forEach(num => {
    if (num <= 2147483647 && num >= -2147483647) res ^= num
  })
  return res
}

function reduce (nums) {
  return nums.reduce((acc, cur) => { if (cur <= 2147483647 && cur >= -2147483647) return acc ^ cur }, 0)
}

const half = Array.from(Array(100000), (_, x) => x + 1)
const arr = [...half, ...half, 100001]

test(
  singleNumber,
  [[4, 1, 2, 1, 2]], // 4
  [arr] // 100001
)

test(
  foreach,
  [[4, 1, 2, 1, 2]], // 4
  [arr] // 100001
)

test(
  reduce,
  [[4, 1, 2, 1, 2]], // 4
  [arr] // 100001
)
