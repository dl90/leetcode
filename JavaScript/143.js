'use strict'
const test = require('./test.js').test
/*
  Given a singly linked list L: L0→L1→…→Ln-1→Ln,
  reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

  You may not modify the values in the list's nodes, only nodes itself may be changed.

  Example 1: Given 1->2->3->4, reorder it to 1->4->2->3.

  Example 2: Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

var reorderList = function (head) {
  if (!head && !head.next) return
  const refs = []

  let cur = head
  while (cur) {
    refs.push(cur)
    cur = cur.next
  }

  let front, back, prevBack
  for (let i = 0, j = refs.length - 1; i <= j; i++, j--) {
    front = refs[i]
    if (prevBack) prevBack.next = front

    if (i !== j) {
      back = refs[j]
      front.next = back
      prevBack = back
    } else {
      front.next = null
    }
  }

  return head
}

function noArr (head) {
  if (!head && !head.next) return

  // Find middle of linked list
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // Corner case where list size is one
  if (fast === slow) {
    return
  }

  let current = slow.next
  let backUp = slow.next
  let prev = null
  let next = null
  slow.next = null

  // Reverse the second part
  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  backUp = prev

  // do the zigzag
  let current1 = head
  let current2 = backUp
  let prev1 = null
  let prev2 = null

  while (current1 && current2) {
    prev1 = current1
    current1 = current1.next

    prev2 = current2
    current2 = current2.next

    prev1.next = prev2
    prev2.next = current1
  }

  return head
}

function ListNode (val) {
  this.val = val
  this.next = null
}

// 1->2->3->4->5
const l_1 = new ListNode(1)
const l_2 = new ListNode(2)
const l_3 = new ListNode(3)
const l_4 = new ListNode(4)
const l_5 = new ListNode(5)
l_4.next = l_5
l_3.next = l_4
l_2.next = l_3
l_1.next = l_2

test(
  reorderList,
  l_1 // 1->5->2->4->3
)

test(
  noArr,
  l_1 // 1->5->2->4->3
)
