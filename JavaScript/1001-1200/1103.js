'use strict'
const test = require('../test.js').test
/*
  We distribute some number of candies, to a row of n = num_people people in the following way:
    We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
    Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
    This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.
    The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

  Return an array (of length num_people and sum candies) that represents the final distribution of candies.

  Example 1:
    Input: candies = 7, num_people = 4
    Output: [1,2,3,1]
    Explanation:
      On the first turn, ans[0] += 1, and the array is [1,0,0,0].
      On the second turn, ans[1] += 2, and the array is [1,2,0,0].
      On the third turn, ans[2] += 3, and the array is [1,2,3,0].
      On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].

  Example 2:
    Input: candies = 10, num_people = 3
    Output: [5,2,3]
    Explanation:
      On the first turn, ans[0] += 1, and the array is [1,0,0].
      On the second turn, ans[1] += 2, and the array is [1,2,0].
      On the third turn, ans[2] += 3, and the array is [1,2,3].
      On the fourth turn, ans[0] += 4, and the final array is [5,2,3].

  Constraints:
    1 <= candies <= 10^9
    1 <= num_people <= 1000
*/

var distributeCandies = function (candies, num_people) {
  const res = new Array(num_people).fill(0)
  let candiesToGive = 1
  let candiesGiven = 0
  let index = 0

  /*
    1. checks candiesGiven + candiesToGive against candies each loop
    2. index % num_people => assigns to correct person
  */
  while (true) {
    if (candiesGiven + candiesToGive < candies) {
      res[index % num_people] += candiesToGive
      candiesGiven += candiesToGive
    } else {
      candiesToGive = candies - candiesGiven
      res[index % num_people] += candiesToGive
      break
    }

    candiesToGive++
    index++
  };

  return res
}

function optimized (candies, num_people) {
  const res = new Uint32Array(num_people)
  let idx = 0; let given = 0

  while (candies) {
    given++

    if (given > candies) given = candies
    res[idx] += given
    candies -= given

    idx++
    if (idx >= num_people) idx = 0
  }

  return res
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    // distributeCandies(7, 4), // [1,2,3,1]
    // distributeCandies(10, 3), // [5,2,3]
    // distributeCandies(1000000000, 1000),

    optimized(7, 4), // [1,2,3,1]
    optimized(10, 3) // [5,2,3]
    // optimized(1000000000, 1000),
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
