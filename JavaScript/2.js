import { test } from './test.js'
/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit.
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
*/

var addTwoNumbers = function (l1, l2) {
  const root = new ListNode(null)
  let pointer = root
  let carry = 0
  let sum
  let mod

  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    mod = sum % 10
    carry = Math.floor(sum / 10)

    const node = new ListNode(mod)
    pointer.next = node
    pointer = node

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  return root.next
}

class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

// 2 -> 4 -> 3
const node1A = new ListNode(2)
const node1B = new ListNode(4)
node1B.next = new ListNode(3)
node1A.next = node1B

// 5 -> 6 -> 4
const node2A = new ListNode(5)
const node2B = new ListNode(6)
node2B.next = new ListNode(4)
node2A.next = node2B

test(
  addTwoNumbers,
  [node1A, node2A] // 7 -> 0 -> 8
)
