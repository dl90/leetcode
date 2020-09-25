import { test } from './test.js'
/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R

  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given a number of rows:
    string convert(string s, int numRows);

  Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

  Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
      P     I    N
      A   L S  I G
      Y A   H R
      P     I
*/

var convert = function (s, numRows) {
  const len = s.length
  if (!len) return ''
  if (len === 1 || numRows === 1) return s
  /*
    array approach
    break s in to array
    reverse array
    PAYPALISHIRING =>  [[P, A, Y, P],[0, L, A, 0], [I, S, H, I], [0, I, R, 0], [N, G]]
  */
  const arr = []
  const between = numRows - 2
  const coverage = numRows + between
  let start = 0
  let end = numRows
  while (start < len) {
    const main = s.slice(start, end)
    arr.push(main.split(''))

    const section = s.slice(end, end + between).padEnd(between, '0')
    arr.push(['0', ...section.split(''), '0'].reverse())

    start += coverage
    end += coverage
  }

  let res = ''
  for (let i = 0; i < numRows; i++) {
    for (const col of arr) {
      if (col[i] && col[i] !== '0') res += col[i]
    }
  }
  return res
}

// @TODO look-at
function optimized (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s
  const grid = Array(numRows).fill('')
  let i = 0
  let down = true

  for (const c of s) {
    grid[i] += c
    down ? i++ : i--
    if (i === numRows - 1 || !i) down = !down
  }
  return grid.join('')
};

test(
  convert,
  ['PAYPALISHIRING', 3], // "PAHNAPLSIIGYIR"
  ['PAYPALISHIRING', 4], // "PINALSIGYAHRPI"
  ['A', 1], // "A"
  ['AB', 1], // "A"
  ['ABCDE', 4] // "ABCED"
)

test(
  optimized,
  ['PAYPALISHIRING', 3], // "PAHNAPLSIIGYIR"
  ['PAYPALISHIRING', 4], // "PINALSIGYAHRPI"
  ['A', 1], // "A"
  ['AB', 1], // "A"
  ['ABCDE', 4] // "ABCED"
)
