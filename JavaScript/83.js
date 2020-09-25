import { test } from './test.js'
/*
  Given a sorted linked list, delete all duplicates such that each element appear only once.

  Example 1:
    Input: 1->1->2
    Output: 1->2

  Example 2:
    Input: 1->1->2->3->3
    Output: 1->2->3
*/

var deleteDuplicates = function (head) {
  let current = head

  while (current) {
    while (current.next && current.val === current.next.val) {
      current.next = current.next.next
    }
    current = current.next
  }

  return head
}

class ListNode {
  constructor (val, next = null) {
    this.val = val
    this.next = next
  }
}

// [1 -> 1 -> 2]
const node = new ListNode(1, new ListNode(1, new ListNode(2)))

test(
  deleteDuplicates,
  node // [1 -> 2]
)
