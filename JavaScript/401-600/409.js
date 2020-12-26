'use strict'
const test = require('../test.js').test
/*
  Given a string which consists of lowercase or uppercase letters,
  find the length of the longest palindromes that can be built with those letters.
  This is case sensitive, for example "Aa" is not considered a palindrome here.

  Note: Assume the length of given string will not exceed 1,010.

  Example:
    Input: "abccccdd"
    Output: 7
    Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

var longestPalindrome = function (s) {
  const map = new Map()
  for (const ltr of s) map.set(ltr, (map.get(ltr) || 0) + 1)

  let count = 0
  for (const [k, v] of map) {
    if (v % 2) {
      if (v > 1) count += v - 1
    } else {
      count += v
    }
  }

  return count < s.length ? count + 1 : count
}

function oneLoop (s) {
  const set = new Set()
  let count = 0
  /*
    check each ltr of s to see if its in set
    if set has ltr, increment count by 2, delete ltr from set
    else add ltr to set

    count will be even b/c we've only incremented by 2
    if count < s.length, there are odd letters and we can add 1 (middle of palindrome)
  */
  for (const ltr of s) set.has(ltr) ? (count += 2, set.delete(ltr)) : set.add(ltr)
  return count < s.length ? count + 1 : count
}

const str = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'

test(
  longestPalindrome,
  'abccccdd', // 7
  str // 983
)

test(
  oneLoop,
  'abccccdd', // 7
  str // 983
)
