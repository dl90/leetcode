'use strict'
const test = require('./test.js').test
/*
  Given a binary tree, each node has value 0 or 1.
  Each root-to-leaf path represents a binary number starting with the most significant bit.
  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

  For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
  Return the sum of these numbers.

  Example 1:
    Input: [1,0,1,0,1,0,1]
    Output: 22
    Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

  Note:
    The number of nodes in the tree is between 1 and 1000.
    node.val is 0 or 1.
    The answer will not exceed 2^31 - 1.
*/

var sumRootToLeaf = function (root) {
  if (!root) return 0
  const [stack, visited, vals, res] = [[root], new Set(), [], []]
  let cur
  while (stack.length) {
    cur = stack[stack.length - 1]
    if (!visited.has(cur)) {
      vals.push(cur.val)
      visited.add(cur)
    }

    if (cur.left && !visited.has(cur.left)) {
      stack.push(cur.left)
    } else if (cur.right && !visited.has(cur.right)) {
      stack.push(cur.right)
    } else {
      if (!cur.left && !cur.right) res.push(vals.join(''))
      stack.pop()
      vals.pop()
    }
  }
  return res.reduce((acc, cur) => acc + parseInt(cur, 2), 0)
}

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [1,0,1,0,1,0,1]
const test1 = new TreeNode(1, new TreeNode(0, new TreeNode(0), new TreeNode(1)), new TreeNode(1, new TreeNode(0), new TreeNode(1)))

test(
  sumRootToLeaf,
  [test1]
)
