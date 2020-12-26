'use strict'
const test = require('../test.js').test
/*
  Write a program that outputs the string representation of numbers from 1 to n.
  But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
  For numbers which are multiples of both three and five output “FizzBuzz”.

  Example:
    n = 15,
    Return:
    [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
    ]
*/

var fizzBuzz = function (n) {
  const res = new Array(n).fill('')
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res[i - 1] = 'FizzBuzz'
    } else if (i % 3 === 0) {
      res[i - 1] = 'Fizz'
    } else if (i % 5 === 0) {
      res[i - 1] = 'Buzz'
    } else {
      res[i - 1] += i
    }
  }
  return res
}

function arr (n) {
  const res = []
  let item

  for (let i = 1; i <= n; i++) {
    item = ''
    if (i % 3 && i % 5) {
      item += i
    } else {
      if (i % 3 === 0) item += 'Fizz'
      if (i % 5 === 0) item += 'Buzz'
    }
    res.push(item)
  }
  return res
};

function map (n) {
  return new Array(n).fill().map((_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)
};

test(
  fizzBuzz,
  300
)

test(
  map,
  300
)

test(
  arr,
  300
)
