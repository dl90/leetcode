'use strict'
const test = require('./test.js').test
/*
  Given two binary search trees root1 and root2.
  Return a list containing all the integers from both trees sorted in ascending order.

  Example 1:
    Input: root1 = [2,1,4], root2 = [1,0,3]
    Output: [0,1,1,2,3,4]

  Example 2:
    Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
    Output: [-10,0,0,1,2,5,7,10]

  Example 3:
    Input: root1 = [], root2 = [5,1,7,0,2]
    Output: [0,1,2,5,7]

  Example 4:
    Input: root1 = [0,-10,10], root2 = []
    Output: [-10,0,10]

  Example 5:
    Input: root1 = [1,null,8], root2 = [8,1]
    Output: [1,1,8,8]

  Constraints:
    Each tree has at most 5000 nodes.
    Each node's value is between [-10^5, 10^5].
*/

var getAllElements = function (root1, root2) {
  const res = []

  function traverse (root, res) {
    const stack = [root]
    const visited = []
    let cur
    while (stack.length) {
      cur = stack[stack.length - 1]
      if (cur.left && !visited.includes(cur.left)) {
        stack.push(cur.left)
      } else if (cur.right && !visited.includes(cur.right)) {
        stack.push(cur.right)
      } else {
        res.push(stack[stack.length - 1].val)
        visited.push(stack.pop())
      }
    }
  }

  if (root1) traverse(root1, res)
  if (root2) traverse(root2, res)
  return res.sort((a, b) => a - b)
}

function recursive (root1, root2) {
  const res = []

  function traverse (root, res) {
    if (root) {
      res.push(root.val)
      traverse(root.left, res)
      traverse(root.right, res)
    }
  }

  if (root1) traverse(root1, res)
  if (root2) traverse(root2, res)
  return res.sort((a, b) => a - b)
}

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [2,1,4]
const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(4))

// [1,0,3]
const root2 = new TreeNode(1, new TreeNode(0), new TreeNode(3))

// [0,-10,10]
const root3 = new TreeNode(0, new TreeNode(-10), new TreeNode(10))

// [5,1,7,0,2]
const root4 = new TreeNode(5, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(7))

// []
const root5 = null

// [5,1,7,0,2]
const root6 = new TreeNode(5, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(7))

test(
  getAllElements,
  [root1, root2], // [0,1,1,2,3,4]
  [root3, root4], // [-10,0,0,1,2,5,7,10]
  [root5, root6] // [0,1,2,5,7]
)

test(
  recursive,
  [root1, root2], // [0,1,1,2,3,4]
  [root3, root4], // [-10,0,0,1,2,5,7,10]
  [root5, root6] // [0,1,2,5,7]
)
