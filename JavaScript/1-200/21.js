import { test } from '../test.js'
/*
  Merge two sorted linked lists and return it as a new sorted list.
  The new list should be made by splicing together the nodes of the first two lists.

  Example:
    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ?? l2

  const head = l1.val <= l2.val ? l1 : l2
  head === l1 ? l1 = l1.next : l2 = l2.next
  let hold = head

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      hold.next = l1
      l1 = l1.next
    } else {
      hold.next = l2
      l2 = l2.next
    }
    hold = hold.next
  }

  // attach remaining if one is exhausted
  hold.next = l1 || l2
  // console.log(check(head))
  return head
}

function check (head) {
  let pointer = head
  const arr = []
  while (pointer) {
    arr.push(pointer.val)
    pointer = pointer.next
  }
  return arr
}

class ListNode {
  constructor (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
};

// l1: 1->2->4
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))

// l2: 1->3->4
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

test(
  mergeTwoLists,
  [l1, l2] // 1->1->2->3->4->4
)
