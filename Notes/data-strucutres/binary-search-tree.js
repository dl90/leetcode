/*
  Restrictions:
    node can have at most 2 children
    child on left must be less than parent
    child on right must be greater than parent
    no same value nodes on same level

  Advantages:
    logarithmic search time

  Disadvantages:
    tree needs to be mostly balanced to enjoy search/traverse efficiency, otherwise, traversals may be similar to a linked list

  node count and height ratio:
    # of nodes = 2^height - 1
    log2(# of nodes + 1) = height
    height = # of decisions
*/

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor (param) {
    this.root = null
    this.comparable = param
  }

  insert () {
    for (const arg of arguments) {
      if (!(this.comparable in arg)) {
        console.log('comparable param not found in', arg)
        continue
      }

      const node = new Node(arg)
      if (!this.root) this.root = node
      else {
        let cur = this.root
        while (true) {
          if (node.data[this.comparable] < cur.data[this.comparable]) {
            if (!cur.left) {
              cur.left = node
              break
            }
            cur = cur.left
          } else if (node.data[this.comparable] > cur.data[this.comparable]) {
            if (!cur.right) {
              cur.right = node
              break
            }
            cur = cur.right
          } else {
            console.log('handel same value node')
            break
          }
        }
      }
    }
  }

  min () {
    if (!this.root) return false
    let cur = this.root
    while (cur.left) cur = cur.left
    return cur.data
  }

  max () {
    if (!this.root) return false
    let cur = this.root
    while (cur.right) cur = cur.right
    return cur.data
  }

  contains (arg) {
    if (!this.root) return false
    let cur = this.root
    while (cur) {
      if (arg < cur.data[this.comparable]) cur = cur.left
      else if (arg > cur.data[this.comparable]) cur = cur.right
      else return true
    }
    return false
  }

  find (arg) {
    if (!this.root) return false
    let cur = this.root
    let depth = 1

    while (cur) {
      if (arg < cur.data[this.comparable]) {
        cur = cur.left
        depth++
      } else if (arg > cur.data[this.comparable]) {
        cur = cur.right
        depth++
      } else return { node: cur.data, depth }
    }
    return false
  }

  delete (arg) {
    function recur (node, arg, comparable) {
      if (!node) return null
      if (arg === node.data[comparable]) {
        if (!node.left && !node.right) return null
        if (!node.left) return node.right
        if (!node.right) return node.left

        let minRightBranch = node.right
        while (minRightBranch.left) minRightBranch = minRightBranch.left
        node.data = minRightBranch.data
        node.right = recur(node.right, minRightBranch.data[comparable], comparable)
      } else if (arg < node.data[comparable]) {
        node.left = recur(node.left, arg, comparable)
      } else if (arg > node.data[comparable]) {
        node.right = recur(node.right, arg, comparable)
      }
      return node
    }
    recur(this.root, arg, this.comparable)
  }

  // visualize () {
  //   const stack = [this.root]
  // }
}

const bst = new BST('id')
bst.insert({ id: 10 })
bst.insert({ id: 5 }, { id: 15 })
bst.insert({ id: 3 }, { id: 7 }, { id: 12 }, { id: 17 })
bst.insert({ id: 2 }, { id: 4 }, { id: 6 }, { id: 8 }, { id: 11 }, { id: 14 }, { id: 16 }, { id: 20 })

console.log(bst.root)
console.log(bst.find(4))
console.log(bst.min())
console.log(bst.max())
bst.delete(15)
console.log(bst.root)
