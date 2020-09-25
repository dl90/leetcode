'use strict'
const test = require('./test.js').test
/*
  Given an array of unique integers salary where salary[i] is the salary of the employee i.
  Return the average salary of employees excluding the minimum and maximum salary.

  Example 1:
    Input: salary = [4000,3000,1000,2000]
    Output: 2500.00000
    Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
      Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

  Example 2:
    Input: salary = [1000,2000,3000]
    Output: 2000.00000
    Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
      Average salary excluding minimum and maximum salary is (2000)/1= 2000

  Example 3:
    Input: salary = [6000,5000,4000,3000,2000,1000]
    Output: 3500.00000

  Example 4:
    Input: salary = [8000,9000,2000,3000,6000,1000]
    Output: 4750.00000

  Constraints:
    3 <= salary.length <= 100
    10^3 <= salary[i] <= 10^6
    salary[i] is unique.
    Answers within 10^-5 of the actual value will be accepted as correct.
*/

var average = function (salary) {
  const len = salary.length
  let min = salary[0]; let max = salary[0]; let sum = salary[0]
  for (let i = 1; i < len; i++) {
    const s = salary[i]
    if (s < min) min = s
    if (s > max) max = s
    sum += s
  }

  return (sum - min - max) / (len - 2)
};

(() => {
  const hrStart = process.hrtime()

  console.log(
    average([4000, 3000, 1000, 2000]), // 2500
    average([1000, 2000, 3000]), // 2000
    average([6000, 5000, 4000, 3000, 2000, 1000]), // 3500
    average([8000, 9000, 2000, 3000, 6000, 1000]) // 4750
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
