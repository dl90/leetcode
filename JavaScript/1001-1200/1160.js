import { test } from '../test.js'
/*
  You are given an array of strings words and a string chars.
  A string is good if it can be formed by characters from chars (each character can only be used once).
  Return the sum of lengths of all good strings in words.

  Example 1:
    Input: words = ["cat","bt","hat","tree"], chars = "atach"
    Output: 6
    Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

  Example 2:
    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
    Output: 10
    Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

  Note:
    1 <= words.length <= 1000
    1 <= words[i].length, chars.length <= 100
    All strings contain lowercase English letters only.
*/

var countCharacters = function (words, chars) {
  const charsMap = new Map()
  const charLen = chars.length
  let res = 0

  for (const letter of chars) charsMap.has(letter) ? charsMap.set(letter, charsMap.get(letter) + 1) : charsMap.set(letter, 1)

  words.forEach(word => {
    const wordLen = word.length
    if (wordLen > charLen) return
    const ref = new Map(charsMap)

    for (let i = 0; i < wordLen; i++) {
      const letter = word[i]
      if (ref.get(letter) > 0) {
        ref.set(letter, ref.get(letter) - 1)
      } else {
        return
      }
    }
    res += wordLen
  })

  return res
}

const arr = [
  'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin', 'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb', 'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
  'boygirdlggnh', 'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx', 'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop', 'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
  'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr', 'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo', 'oxgaskztzroxuntiwlfyufddl', 'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
  'qnagrpfzlyrouolqquytwnwnsqnmuzphne', 'eeilfdaookieawrrbvtnqfzcricvhpiv', 'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz', 'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
  'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv', 'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo', 'teyygdmmyadppuopvqdodaczob',
  'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs', 'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs'
]
test(
  countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), // 6
  countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'), // 10
  countCharacters(arr, 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp') // 0
)
