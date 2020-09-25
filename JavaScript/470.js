'use strict'
const test = require('./test.js').test
/*
  Given a function rand7 which generates a uniform random integer in the range 1 to 7, write a function rand10 which generates a uniform random integer in the range 1 to 10.

  Do NOT use system's Math.random().

  Example 1:
    Input: 1
    Output: [7]

  Example 2:
    Input: 2
    Output: [8,4]

  Example 3:
    Input: 3
    Output: [8,1,10]

  Note:
    rand7 is predefined.
    Each testcase has one argument: n, the number of times that rand10 is called.

  Follow up:
    What is the expected value for the number of calls to rand7() function?
    Could you minimize the number of calls to rand7()?
*/

const rand7 = () => Math.floor(Math.random() * (7 - 0 + 1)) + 0

var rand10 = function () {
  let i = 7
  let j = 6
  while (i > 6) i = rand7()
  while (j > 5) j = rand7()
  /*
    i could be 1, 2, 3, 4, 5, or 6 (6/7)
    j could be 1, 2, 3, 4, or 5 (5/7)

    if i end up being even (50% the chance because it could be 2, 4, 6)
      return 1, 2, 3, 4, or 5

    if i end up being odd (also 50% of the chance because it could be 1, 3, 5)
      return 6, 7, 8, 9, or 10
  */
  return !(i % 2) ? j : j + 5
}

/*
  [0 ... 70] % 10 => [0 ... 9] + 1
*/
function rand10_2 () {
  let ans = 0
  for (let i = 0; i < 10; i++) { ans += rand7() }
  return (ans % 10) + 1
}

console.log(new Int32Array(20).map(_ => rand10()).toString())
console.log(new Int32Array(20).map(_ => rand10_2()).toString())

test(
  rand10,
  -1, -1, -1, -1, -1, -1
)

test(
  rand10_2,
  -1, -1, -1, -1, -1, -1
)
