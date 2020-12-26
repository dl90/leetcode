'use strict'
const test = require('../test.js').test
/*
  Given an integer n, add a dot (".") as the thousands separator and return it in string format.

  Example 1:
    Input: n = 987
    Output: "987"

  Example 2:
    Input: n = 1234
    Output: "1.234"

  Example 3:
    Input: n = 123456789
    Output: "123.456.789"

  Example 4:
    Input: n = 0
    Output: "0"

  Constraints: 0 <= n < 2^31
*/

var thousandSeparator = function (n) {
  const _n = String(n)
  if (n < 1000) return _n
  let res = ''

  for (let i = _n.length - 1, j = 1; i > -1; i--, j++) {
    res = _n[i] + res
    if (j === 3 && i > 0) {
      res = '.' + res
      j = 0
    }
  }
  return res
}

function thousandSeparator2 (n) {
  if (n < 1000) return String(n)
  const arr = []
  let remainder

  while (n) {
    remainder = n % 1000
    n = ~~(n / 1000)
    n ? arr.push(String(remainder).padStart(3, 0)) : arr.push(String(remainder))
  }

  return arr.reverse().join('.')
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    // thousandSeparator(123456789), // "123.456.789"
    // thousandSeparator(0), // 0
    // thousandSeparator(51040), // "51.040"

    thousandSeparator2(123456789), // "123.456.789"
    thousandSeparator2(0), // 0
    thousandSeparator2(51040) // "51.040"
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
