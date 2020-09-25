'use strict'
const test = require('./test.js').test
/*
  Given a word, you need to judge whether the usage of capitals in it is right or not.
  We define the usage of capitals in a word to be right when one of the following cases holds:
    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

    Otherwise, we define that this word doesn't use capitals in a right way.

  Example 1:
    Input: "USA"
    Output: True

  Example 2:
    Input: "FlaG"
    Output: False

  Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

var detectCapitalUse = function (word) {
  const arr = Array.from(word).map(val => val.charCodeAt(0))
  const allCaps = arr => arr.every(val => val <= 90)
  const allLower = arr => arr.every(val => val >= 97)

  if (arr[0] <= 90) {
    const slice = arr.slice(1)
    return !!(allCaps(slice) || allLower(slice))
  } else {
    return allLower(arr)
  }
}

function regex (word) {
  return /^[A-Z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word) || /^[a-z]+$/.test(word)
};

function checkValid (word) {
  return [word.toUpperCase(), word.toLowerCase(), word[0].toUpperCase() + word.slice(1).toLowerCase()].includes(word)
};

test(
  detectCapitalUse,
  'USA', // true
  'Fl' + 'a'.repeat(100000) + 'g', // true
  'fl' + 'a'.repeat(100000) + 'g', // true
  'Fl' + 'a'.repeat(100000) + 'G' // false
)

test(
  regex,
  'USA', // true
  'Fl' + 'a'.repeat(100000) + 'g', // true
  'fl' + 'a'.repeat(100000) + 'g', // true
  'Fl' + 'a'.repeat(100000) + 'G' // false
)

test(
  checkValid,
  'USA', // true
  'Fl' + 'a'.repeat(100000) + 'g', // true
  'fl' + 'a'.repeat(100000) + 'g', // true
  'Fl' + 'a'.repeat(100000) + 'G' // false
)
