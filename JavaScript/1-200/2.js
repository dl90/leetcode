import test from '../test.js'
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

function addTwoNumbers (l1, l2) {
  const root = new ListNode(null)
  let pointer = root
  let carry = 0

  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    const mod = sum % 10
    carry = Math.floor(sum / 10)

    const node = new ListNode(mod)
    pointer.next = node
    pointer = pointer.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return root.next
}

class ListNode {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

// 2 -> 4 -> 3
const node1 = new ListNode(2, new ListNode(4, new ListNode(3)))

// 5 -> 6 -> 4
const node2 = new ListNode(5, new ListNode(6, new ListNode(4)))

test(
  addTwoNumbers,
  [node1, node2] // 7 -> 0 -> 8
)
