'use strict'
const test = require('../test.js').test
/*
  You are given a string representing an attendance record for a student.
  The record only contains the following three characters:
    'A' : Absent.
    'L' : Late.
    'P' : Present.
  A student could be rewarded if his attendance record doesn't contain
  more than one 'A' (absent) or more than two continuous 'L' (late).

  You need to return whether the student could be rewarded according to his attendance record.

  Example 1:
    Input: "PPALLP"
    Output: True

  Example 2:
    Input: "PPALLL"
    Output: False
*/

var checkRecord = function (s) {
  let absent = 0; let late = 0
  for (const ltr of s) {
    if (ltr === 'A') absent++
    ltr === 'L' ? late++ : late = 0
    if (absent > 1 || late > 2) return false
  }
  return true
}

test(
  checkRecord,
  'PPALLP', // true
  'PPALLAP', // false
  'PPALLL' // false
)
