'use strict'
const test = require('./test.js').test
/*
  Alice and Bob take turns playing a game, with Alice starting first.
  Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

    Choosing any x with 0 < x < N and N % x == 0.
    Replacing the number N on the chalkboard with N - x.
    Also, if a player cannot make a move, they lose the game.

  Return True if and only if Alice wins the game, assuming both players play optimally.

  Example 1:
    Input: 2
    Output: true
    Explanation: Alice chooses 1, and Bob has no more moves.

  Example 2:
    Input: 3
    Output: false
    Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

  Note: 1 <= N <= 1000
*/

var divisorGame = function (N) {
  const arr = []

  let i
  while (N > 1) {
    i = 1
    while (i < N) {
      if (!(N % i)) {
        N -= i
        arr.push(N)
        break
      }
      i++
    }
  }

  return !!(arr.length % 2)
}

function optimized (N) {
  return !!((N - 1) % 2)
}

test(
  divisorGame,
  2, // true
  3, // false
  10000 // true
)

test(
  optimized,
  2, // true
  3, // false
  10000 // true
)
