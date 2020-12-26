import { test } from '../test.js'
/*
  All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

  Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

  Example 1:
    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    Output: ["AAAAACCCCC","CCCCCAAAAA"]

  Example 2:
    Input: s = "AAAAAAAAAAAAA"
    Output: ["AAAAAAAAAA"]

  Constraints:
    0 <= s.length <= 105
    s[i] is 'A', 'C', 'G', or 'T'.
*/

var findRepeatedDnaSequences = function (s) {
  const len = s.length
  if (len < 10) return []
  const visited = new Set()
  const res = new Set()

  for (let i = 0; i <= len - 10; i++) {
    const seg = s.slice(i, i + 10)
    if (visited.has(seg)) res.add(seg)
    visited.add(seg)
  }
  return [...res]
}

test(
  findRepeatedDnaSequences,
  'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', // ["AAAAACCCCC","CCCCCAAAAA"]
  'AAAAAAAAAAAAA' // ["AAAAAAAAAA"]
)
