import { test } from './test.js'
/*
  Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
  (Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

  Since the answer may be large, return the answer modulo 10^9 + 7.

  Example 1:
    Input: n = 5
    Output: 12
    Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.

  Example 2:
    Input: n = 100
    Output: 682289015

  Constraints:
    1 <= n <= 100
*/

var numPrimeArrangements = function (n) {
  const MOD = 1000000007n
  function countPrimes (arg) {
    if (arg < 2) return 0
    const arr = new Int8Array(arg + 1)
    for (let i = 2; i * i <= arg; i++) {
      if (!arr[i]) {
        for (let j = i * i; j <= arg; j += i) arr[j] = 1
      }
    }
    return (arr.filter(val => val === 0).length - 2)
  }

  function factorial (arg, init = 1n) {
    while (arg > 0) init *= BigInt(arg--)
    return init % MOD
  }

  const primeCount = countPrimes(n)
  return parseInt((factorial(primeCount) * factorial(n - primeCount)) % MOD)
}

test(
  numPrimeArrangements,
  1, // (primes: 0) 1
  5, // (primes: 3) 12
  100 // (primes: 25) 682289015
)
