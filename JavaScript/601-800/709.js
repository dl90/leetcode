'use strict'
const test = require('../test.js').test
/*
  Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

  Example 1:
    Input: "Hello"
    Output: "hello"

  Example 2:
    Input: "here"
    Output: "here"

  Example 3:
    Input: "LOVELY"
    Output: "lovely"

  Think about the different capital letters and their ASCII codes and how that relates to their lowercase counterparts.
  Does there seem to be any pattern there? Any mathematical relationship that we can use?
*/

var toLowerCase = function (str) {
  return [...str].map((ltr, idx, _, temp) => {
    temp = str.charCodeAt(idx)
    // A-Z 65 to 90
    return temp > 64 && temp < 91 ? String.fromCharCode(temp + 32) : ltr
  }).join('')
}

test(
  toLowerCase,
  'Hello', // "hello"
  'here', // "here"
  'LOVELY' // "lovely"
)
