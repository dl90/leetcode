'use strict'
const test = require('../test.js').test
/*
  Given two strings s and t , write a function to determine if t is an anagram of s.

  Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

  Example 2:
    Input: s = "rat", t = "car"
    Output: false

  Note: You may assume the string contains only lowercase alphabets.
  Follow up: What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = new Map()

  for (const ltr of s) map.set(ltr, (map.get(ltr) ?? 0) + 1)
  for (const ltr of t) {
    if (!map.has(ltr)) return false
    map.set(ltr, map.get(ltr) - 1)
    if (map.get(ltr) < 1) map.delete(ltr)
  }

  return map.size === 0
}

function sort (s, t) {
  if (s.length !== t.length) return false
  s = [...s].sort().join('')
  t = [...t].sort().join('')
  return s === t
};

function arr (s, t) {
  if (s.length !== t.length) return false
  const arr = new Int16Array(26)

  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0) - 97]++
    arr[t[i].charCodeAt(0) - 97]--
  }

  return arr.every(val => val === 0)
}

test(
  isAnagram,
  ['anagram', 'nagaram'], // true
  ['rat', 'car'], // false
  ['ab', 'a'], // false
  ['abc'.repeat(1000), 'cba'.repeat(1000)], // true
  ['abc'.repeat(1000), 'cbd'.repeat(1000)] // false
)

test(
  sort,
  ['anagram', 'nagaram'], // true
  ['rat', 'car'], // false
  ['ab', 'a'], // false
  ['abc'.repeat(1000), 'cba'.repeat(1000)], // true
  ['abc'.repeat(1000), 'cbd'.repeat(1000)] // false
)

test(
  arr,
  ['anagram', 'nagaram'], // true
  ['rat', 'car'], // false
  ['ab', 'a'], // false
  ['abc'.repeat(1000), 'cba'.repeat(1000)], // true
  ['abc'.repeat(1000), 'cbd'.repeat(1000)] // false
)
