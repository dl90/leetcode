import { test } from '../test.js'
/*
  Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

  For each such occurrence, add "third" to the answer, and return the answer.

  Example 1:
    Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
    Output: ["girl","student"]

  Example 2:
    Input: text = "we will we will rock you", first = "we", second = "will"
    Output: ["we","rock"]

  Note:
    1 <= text.length <= 1000
    text consists of space separated words, where each word consists of lowercase English letters.
    1 <= first.length, second.length <= 10
    first and second consist of lowercase English letters.
*/

var findOcurrences = function (text, first, second) {
  const arr = text.split(' ')
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === first && arr[i + 1] === second && arr[i + 2]) res.push(arr[i + 2])
  }
  return res
}

test(
  findOcurrences,
  ['alice is a good girl she is a good student', 'a', 'good'], // ["girl","student"]
  ['we will we will rock you', 'we', 'will'], // ["we","rock"]
  ['we will', 'we', 'will'], // []
  ['we we we we', 'we', 'we'] // ["we","we"]
)
