'use strict'
const test = require('../test.js').test
/*
  There are some chips, and the i-th chip is at position chips[i].
  You can perform any of the two following types of moves any number of times (possibly zero) on any chip:

    Move the i-th chip by 2 units to the left or to the right with a cost of 0.
    Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
    There can be two or more chips at the same position initially.

  Return the minimum cost needed to move all the chips to the same position (any position).

  Example 1:
  Input: chips = [1,2,3]
  Output: 1
  Explanation: Second chip will be moved to position 3 with cost 1. First chip will be moved to position 3 with cost 0. Total cost is 1.

  Example 2:
  Input: chips = [2,2,2,3,3]
  Output: 2
  Explanation: Both fourth and fifth chip will be moved to position two with cost 1. Total minimum cost will be 2.

  Constraints:
  1 <= chips.length <= 100
  1 <= chips[i] <= 10^9
*/

/*
Approach:

  Because only 1 unit moves are associated with a cost, this can be approached as an odd/even problem
  an odd number will stay an odd number with 2 moves (1 => 3 => 5)
  an even number will stay even with 2 moves (2 => 4 => 6)
  the only cost is the change from an odd number to an even number (1 => 2)

  with this in mind we just need to count all occurrences of odd numbers and even numbers
  The larger count will be the target and the smaller count is the cost
  => we just need to return the lesser of the 2
*/
var minCostToMoveChips = function (chips) {
  let [odd, even] = [0, 0]
  for (const ele of chips) ele % 2 === 0 ? even++ : odd++
  return Math.min(odd, even)
}

test(
  minCostToMoveChips([1, 2, 3]), // 1 (only cost is moving the 2 to 1 or 3)
  minCostToMoveChips([2, 2, 2, 3, 3]) // 2 (only cost is moving 2 3's to 2)
)
