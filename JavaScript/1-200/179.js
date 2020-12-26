import { test } from '../test.js'
/*
  Given a list of non negative integers, arrange them such that they form the largest number.

  Example 1:
    Input: [10,2]
    Output: "210"

  Example 2:
    Input: [3,30,34,5,9]
    Output: "9534330"

  Note: The result may be very large, so you need to return a string instead of an integer.
*/

// @TODO fix
var largestNumber = function (nums) {
  const res = [...nums]

  res.sort((a, b) => {
    a += ''
    b += ''
    const l = a.length >= b.length ? a.length : b.length

    for (let i = 0; i < l; i++) {
      if (!a[i]) return a[i - 1] > b[i] ? -1 : 1
      else if (!b[i]) return b[i - 1] > a[i] ? 1 : -1
      else if (a[i] > b[i]) return -1
      else if (a[i] < b[i]) return 1
    }
  })

  if (res.every(v => v === 0)) return '0'
  return res.join('')
}

function fastest (nums) {
  nums.sort((a, b) => {
    const first = a + '' + b
    const second = b + '' + a
    return second - first
  })

  const result = nums.join('')
  return parseInt(result) ? result : '0'
}

test(
  largestNumber,
  [[10, 2]], // '210'
  [[3, 30, 34, 5, 9]], // '9534330'
  [[321, 123]], // '321123'
  [[121, 12]], // '12121'
  [[824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]], // '9609938824824769735703560743981399'
  [[0, 0]] // 0
)

test(
  fastest,
  [[10, 2]], // '210'
  [[3, 30, 34, 5, 9]], // '9534330'
  [[321, 123]], // '321123'
  [[121, 12]], // '12121'
  [[824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247]], // '9609938824824769735703560743981399'
  [[0, 0]] // 0
)
