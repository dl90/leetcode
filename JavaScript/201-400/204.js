import { test } from '../test.js'
/*
  Count the number of prime numbers less than a non-negative number, n.

  Example:
    Input: 10
    Output: 4
    Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

function countPrimes (n) {
  let count = 0

  s: for (let seed = 2; seed < n; seed++) {
    for (let divisor = 2; divisor * divisor <= seed; divisor++) {
      if (seed % divisor === 0) continue s
    }
    count++
  }
  return count
};

function sieve (n) {
  if (n < 2) return 0
  const arr = new Int8Array(n)

  for (let i = 2; i * i < n; i++) {
    if (!arr[i]) {
      for (let j = i * i; j < n; j += i) arr[j] = 1
    }
  }
  return arr.reduce((acc, cur) => !cur ? acc += 1 : acc, -2)
}

test(
  countPrimes,
  10, // 4
  1000000 // 78498
)

test(
  sieve,
  10, // 4
  1000000 // 78498
)
