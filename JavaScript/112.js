import { test } from './test.js'
/*
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

  Note: A leaf is a node with no children.

  Example:
    Given the below binary tree and sum = 22,
          5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1
    return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

function recursive (root, sum, acc = 0) {
  if (!root) return false
  if (!root.left && !root.right) return acc + root.val === sum
  return recursive(root.left, sum, acc + root.val) || recursive(root.right, sum, acc + root.val)
}

// modifies TreeNode.val
var hasPathSum = function (root, sum) {
  if (!root) return false
  const queue = [root]
  let cur
  while (queue.length) {
    cur = queue.shift()
    if (!cur.left && !cur.right && cur.val === sum) return true
    if (cur.left) {
      cur.left.val += cur.val
      queue.push(cur.left)
    }
    if (cur.right) {
      cur.right.val += cur.val
      queue.push(cur.right)
    }
  }
  return false
}

// @TODO
function stack (root, sum) {
  if (!root) return false
  const stack = [root]
  const visited = new Set()
  let rSum = 0
  let cur

  while (stack.length) {
    cur = stack[stack.length - 1]
    rSum += cur.val
    visited.add(cur)

    if (cur.left && !visited.has(cur.left)) {
      stack.push(cur.left)
    } else if (cur.right && !visited.has(cur.right)) {
      stack.push(cur.right)
    } else {
      // if (rSum === sum) return true
      console.log(rSum)
      rSum -= stack.pop().val
      console.log(rSum)
    }
  }
  return false
}

class TreeNode {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const test1A = new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)))
const test1B = new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
const test1 = new TreeNode(5, test1A, test1B)

// [1,2,null]
const test2 = new TreeNode(1, new TreeNode(2))

// [-2,null,-3]
const test3 = new TreeNode(-2, null, new TreeNode(-3))

// [1,null,null]
const test4 = new TreeNode(1)

// [1,2,null,3,null,4,null,5]
const test5 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, new TreeNode(5)))))

test(
  recursive,
  [test1, 22], // true
  [test2, 1], // false
  [test3, -5], // true
  [test4, 0], // false
  [test5, 6] // false
)

test(
  stack,
  [test1, 22], // true
  // [test2, 1], // false
  // [test3, -5], // true
  // [test4, 0], // false
  // [test5, 6] // false
)

test(
  hasPathSum,
  [test1, 22], // true
  [test2, 1], // false
  [test3, -5], // true
  [test4, 0], // false
  [test5, 6] // false
)
