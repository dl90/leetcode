'use strict'
const test = require('./test.js').test
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
  nums.forEach(num => {
    if (num <= 2147483647 && num >= -2147483647) res = res ^ num
  })
  return res
}

test(
  singleNumber,
  [[4, 1, 2, 1, 2]] // 4
)
