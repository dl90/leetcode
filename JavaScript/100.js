import { test } from './test.js'
/*
  Given two binary trees, write a function to check if they are the same or not.
  Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

  Example 1:
    Input:     1         1
              / \       / \
             2   3     2   3
            [1,2,3],   [1,2,3]
    Output: true

  Example 2:
    Input:     1         1
              /           \
             2             2
            [1,2],     [1,null,2]
    Output: false

  Example 3:
    Input:     1         1
              / \       / \
             2   1     1   2
            [1,2,1],   [1,1,2]
    Output: false
*/

class Queue {
  #data = new Map()
  #head = 0
  #tail = 0

  constructor () {
    for (const arg of arguments) {
      if (Array.isArray(arg)) {
        for (const ele of arg) this.enqueue(ele)
      } else this.enqueue(arg)
    }
  }

  enqueue () {
    for (const arg of arguments) {
      if (!Array.isArray(arg)) {
        this.#data.set(this.#tail, arg)
        this.#tail++
      }
    }
  }

  dequeue () {
    const ref = this.#data.get(this.#head)
    this.#data.delete(this.#head)
    this.#head++
    return ref
  }

  get size () { return this.#data.size }

  toString () {
    return console.log({
      head: this.#head,
      tail: this.#tail,
      data: Array.from(this.#data.entries())
    })
  }
}

class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false

  const p_queue = new Queue(p)
  const q_queue = new Queue(q)

  let p_cur; let q_cur; let l = 0; let r = 0
  while (Math.min(p_queue.size, q_queue.size)) {
    // p_queue.toString()
    // q_queue.toString()

    p_cur = p_queue.dequeue()
    q_cur = q_queue.dequeue()

    if (p_cur) {
      p_cur.left ? p_queue.enqueue(p_cur.left) : l++
      p_cur.right ? p_queue.enqueue(p_cur.right) : r++
    }

    if (q_cur) {
      q_cur.left ? q_queue.enqueue(q_cur.left) : l--
      q_cur.right ? q_queue.enqueue(q_cur.right) : r--
    }

    if (q_queue.size !== p_queue.size || p_cur.val !== q_cur.val || l !== r) return false
  }
  return true
}

function recursive (p, q) {
  if (p === null || q === null) return p === q
  if (p.val !== q.val) return false
  return recursive(p.left, q.left) && recursive(p.right, q.right)
}

// [1,2,3]
const eg1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

// [1,2]
const eg2A = new TreeNode(1, new TreeNode(2))
// [1,null,2]
const eg2B = new TreeNode(1, null, new TreeNode(2))

// [1,2,1]
const eg3A = new TreeNode(1, new TreeNode(2), new TreeNode(1))
// [1,1,2]
const eg3B = new TreeNode(1, new TreeNode(1), new TreeNode(2))

test(
  isSameTree,
  [eg1, eg1], // true
  [eg2A, eg2B], // false
  [eg3A, eg3B] // false
)

test(
  recursive,
  [eg1, eg1], // true
  [eg2A, eg2B], // false
  [eg3A, eg3B] // false
)
