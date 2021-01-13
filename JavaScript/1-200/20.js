import test from '../test.js'
/*
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.

  Example 1:
    Input: "()"
    Output: true

  Example 2:
    Input: "()[]{}"
    Output: true

  Example 3:
    Input: "(]"
    Output: false

  Example 4:
    Input: "([)]"
    Output: false

  Example 5:
    Input: "{[]}"
    Output: true
*/

function isValid (s) {
  const len = s.length
  if (len === 0) return true
  if (len % 2 === 1) return false

  const stack = []
  const pairs = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])

  for (let i = 0; i < len; i++) {
    if (pairs.has(s[i])) {
      stack.push(s[i])
    } else if (pairs.get(stack.pop()) !== s[i]) {
      return false
    }
  }
  return stack.length === 0
}

test(
  isValid,
  '()[]{}', // true
  '([)]', // false
  '{{' // false
)
