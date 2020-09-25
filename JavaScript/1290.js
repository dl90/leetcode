'use strict'
const test = require('./test.js').test
/*
  Given head which is a reference node to a singly-linked list.
  The value of each node in the linked list is either 0 or 1.
  The linked list holds the binary representation of a number.

  Return the decimal value of the number in the linked list.

  Example 1:
    Input: head = [1,0,1]
    Output: 5
    Explanation: (101) in base 2 = (5) in base 10

  Example 2:
    Input: head = [0]
    Output: 0

  Example 3:
    Input: head = [1]
    Output: 1

  Example 4:
    Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
    Output: 18880

  Example 5:
    Input: head = [0,0]
    Output: 0

  Constraints:
    The Linked List is not empty.
    Number of nodes will not exceed 30.
    Each node's value is either 0 or 1.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  // const res = Int8Array.from(new Array(30), _ => -1);
  // let i = 0;
  // while (head && i < 30) {
  //   console.log(head)
  //   res[i] = head.val;
  //   i++
  //   head = head.next;
  // }

  let num = 0
  // for (let i = 0; i < res.length; i++) {
  //   if (res[i] == -1) break;
  //   num = num << 1 | res[i];
  // }

  while (head) {
    num = num << 1 | head.val
    head = head.next
  }

  return num
}

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const head = new ListNode(1)
const body = new ListNode(0)
const end = new ListNode(1)
head.next = body
body.next = end

test(
  getDecimalValue(head)
)
