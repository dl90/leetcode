'use strict'
const test = require('./test.js').test
/*
  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  You can use each character in text at most once. Return the maximum number of instances that can be formed.

  Example 1:
    Input: text = "nlaebolko"
    Output: 1

  Example 2:
    Input: text = "loonbalxballpoon"
    Output: 2

  Example 3:
    Input: text = "leetcode"
    Output: 0

  Constraints:
    1 <= text.length <= 10^4
    text consists of lower case English letters only.
*/

var maxNumberOfBalloons = function (text, target = 'balloon') {
  if (text.length < target.length) return 0
  const targetMap = new Map()
  const textMap = new Map()

  const populate = (str, map) => {
    const len = str.length
    for (let i = 0; i < len; i++) {
      const val = str[i]
      map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1)
    }
    // str.split("").forEach(val => {
    //   map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
    // })
  }
  populate(target, targetMap)
  populate(text, textMap)

  const multiplier = []
  // populates count of target letters in text
  for (const [key, val] of targetMap) {
    if (textMap.has(key)) multiplier.push(parseInt(textMap.get(key) / val))
  }

  return multiplier.length == targetMap.size ? Math.min(...multiplier) : 0
}

test(
  maxNumberOfBalloons('nlaebolko'), // 1
  maxNumberOfBalloons('loonbalxballpoon'), // 2
  maxNumberOfBalloons('leetcode') // 0
)
