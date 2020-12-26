"use strict";
const test = require("../test.js").test;
/*
  Find the sum of all left leaves in a given binary tree.

  Example:
      3
     / \
    9  20
      /  \
     15   7

  There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

class CustomQ {
  #data = new Map();
  #head = 0;
  #tail = 0;

  constructor() {
    for (const arg of arguments) {
      if (Array.isArray(arg)) {
        for (const ele of arg) this.enqueue(ele);
      } else {
        this.enqueue(arg);
      }
    }
  }

  enqueue() {
    for (const arg of arguments) {
      if (!Array.isArray(arg)) {
        this.#data.set(this.#tail, arg);
        this.#tail++;
      }
    }
  }

  dequeue() {
    const ref = this.#data.get(this.#head);
    this.#data.delete(this.#head);
    this.#head++;
    return ref;
  }

  get size() { return this.#data.size }

  toString() {
    return console.log({
      head: this.#head,
      tail: this.#tail,
      data: Array.from(this.#data.entries())
    });
  }
}

var sumOfLeftLeaves = function (root) {
  if (!root || (!root.left && !root.right)) return 0;
  const left = new CustomQ();
  const right = new CustomQ(root);
  let sum = 0;

  let cur;
  while (left.size || right.size) {
    if (left.size) {
      cur = left.dequeue();
      if (!cur.left && !cur.right) sum += cur.val;
      if (cur.right) right.enqueue(cur.right);
      if (cur.left) left.enqueue(cur.left);
    } else {
      cur = right.dequeue();
      if (cur.right) right.enqueue(cur.right);
      if (cur.left) left.enqueue(cur.left);
    }
  }

  return sum;
};

function stack(root) {
  if (!root) return 0;
  const stack = [root];
  let node, res = 0;

  while (stack.length) {
    node = stack.pop();
    if (node.left) {
      stack.push(node.left);
      if (!node.left.left && !node.left.right) res += node.left.val;
    }
    if (node.right) stack.push(node.right);
  }
  return res;
};

const root = new TreeNode(3, new TreeNode(2), new TreeNode(4));

test(
  sumOfLeftLeaves,
  root, // 2
);

test(
  stack,
  root, // 2
);
