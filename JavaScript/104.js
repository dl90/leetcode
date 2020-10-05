import { test } from './test.js'
/*
  Given a binary tree, find its maximum depth.
  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  Note: A leaf is a node with no children.

  Example:
    Given binary tree [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
    return its depth = 3.
*/

var maxDepth = function (root) {
  if (!root) return 0
  const stack = [root]
  let depth = 0

  while (stack.length) {
    const len = stack.length
    depth++

    for (let i = 0; i < len; i++) {
      if (stack[i].left) stack.push(stack[i].left)
      if (stack[i].right) stack.push(stack[i].right)
    }

    stack.splice(0, len)
  }

  return depth
}

class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const n = new TreeNode(20, new TreeNode(15), new TreeNode(17))
const nn = new TreeNode(3, new TreeNode(9), n)

test(
  maxDepth,
  n, // 2
  nn // 3
)
