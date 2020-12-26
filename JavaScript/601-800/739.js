'use strict'
const test = require('../test.js').test
/*
  Given a list of daily temperatures T, return a list such that,
  for each day in the input, tells you how many days you would have to wait until a warmer temperature.
  If there is no future day for which this is possible, put 0 instead.

  For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
  Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

  If the temperature is say, 70 today, then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100.
  We could remember when all of them occur next.
*/

var dailyTemperatures = function (T) {
  const len = T.length
  const res = new Array(len).fill(0)
  const stack = []
  // const map = new Map();

  /*
    populate a stack with 0
    iterate in reverse order to use stack to keep track of previous value (stack.pop)
    compare curVal with preVal [temp, idx]
      while stack contains values && curVal >= preVal: -> pop preVal
        we pop the preVal b/c its decreasing, were only looking for increasing temp (one step ahead)
      if curVal < prevVal: -> calculate difference in index and assign it to res
      add the temp and index to the stack at each iteration
  */

  // for (let i = len - 1; i > -1; i--) {
  //   const curVal = T[i];
  //   while (map.size && curVal >= map.get(map.size - 1)[0]) map.delete(map.size - 1);
  //   if (map.size && curVal < map.get(map.size - 1)[0]) res[i] = map.get(map.size - 1)[1] - i;
  //   map.set(map.size, [curVal, i]);
  // }

  let curVal
  for (let i = len - 1; i > -1; i--) {
    curVal = T[i]
    while (stack.length && curVal >= stack[stack.length - 1][0]) { stack.pop() };
    if (stack.length && curVal < stack[stack.length - 1][0]) res[i] = stack[stack.length - 1][1] - i
    stack.push([curVal, i])
  }

  return res
}

test(
  dailyTemperatures,
  [[73, 74, 75, 71, 69, 72, 76, 73]] // [1, 1, 4, 2, 1, 1, 0, 0]
)
