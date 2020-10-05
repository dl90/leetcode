import { test } from './test.js'
/*
  In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

  You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

  Example 1:
    Input: [1,4], 2
    Output: 4
    Explanation:
      At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
      This poisoned status will last 2 seconds until the end of time point 2.
      And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
      So you finally need to output 4.

  Example 2:
    Input: [1,2], 2
    Output: 3
    Explanation:
      At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
      This poisoned status will last 2 seconds until the end of time point 2.
      However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
      Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3.
      So you finally need to output 3.

  Note:
    You may assume the length of given time series array won't exceed 10000.
    You may assume the numbers in the Teemo's attacking time series and his poisoning time duration per attacking are non-negative integers, which won't exceed 10,000,000.
*/

var findPoisonedDuration = function (timeSeries, duration) {
  const len = timeSeries.length
  if (!len) return 0
  let count = 0

  for (let i = 0; i < len - 1; i++) {
    count += Math.min(timeSeries[i + 1] - timeSeries[i], duration)
  }
  return count + duration
}

// @TODO look at
function alt (timeSeries, duration) {
  if (!timeSeries.length) return 0
  let res = 0
  let start = timeSeries[0]
  let end = start + duration

  for (let i = 1; i < timeSeries.length; i++) {
    const nStart = timeSeries[i]
    const nEnd = nStart + duration

    if (nStart > end) {
      res += (end - start)
      start = nStart
    }
    end = nEnd
  }
  res += (end - start)
  return res
}

test(
  findPoisonedDuration,
  [[1, 4], 2], // 4
  [[1, 2], 2], // 3
  [[0], 5], // 5
  [[], 100], // 0
  [[1, 3, 5], 5] // 11
)

test(
  alt,
  [[1, 4], 2], // 4
  [[1, 2], 2], // 3
  [[0], 5], // 5
  [[], 100], // 0
  [[1, 3, 5], 5] // 11
)
