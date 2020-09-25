'use strict'
const test = require('./test.js').test
/*
  Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
  The operation of drinking a full water bottle turns it into an empty bottle.
  Return the maximum number of water bottles you can drink.

  Example 1:
    Input: numBottles = 9, numExchange = 3
    Output: 13
    Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
      Number of water bottles you can drink: 9 + 3 + 1 = 13.

  Example 2:
    Input: numBottles = 15, numExchange = 4
    Output: 19
    Explanation: You can exchange 4 empty bottles to get 1 full water bottle.
      Number of water bottles you can drink: 15 + 3 + 1 = 19.

  Example 3:
    Input: numBottles = 5, numExchange = 5
    Output: 6

  Example 4:
    Input: numBottles = 2, numExchange = 3
    Output: 2

  Constraints:
    1 <= numBottles <= 100
    2 <= numExchange <= 100
*/

var numWaterBottles = function (numBottles, numExchange) {
  if (numExchange > numBottles) return numBottles
  let empty = numBottles
  let drink = numBottles

  /*
    bottles | full | empty | drink
    10         0     10      10
    4          3      1      10
    4          0      4      13
    1          1      1      14
  */
  while (empty >= numExchange) {
    const full = Math.floor(empty / numExchange)
    const remainder = empty % numExchange

    empty = full + remainder
    drink += full
  }
  return drink
}

test(
  numWaterBottles(9, 3), // 13
  numWaterBottles(15, 4), // 19
  numWaterBottles(5, 5), // 6
  numWaterBottles(2, 3) // 2
)
