/*
  Linked List

  list type data structure
  no indexes, only knows own value and pointer to next element

  offers efficient node insertion especially at beginning of the list, O(1)
  flexible with resizing
*/

class Node {
  constructor (val) {
    this.value = val
    this.next = null
  }
}

class LinkedList extends Node {
  constructor () {
    super()
    this.head = null
    this.tail = null
    delete this.next
  }

  append () {
    for (let i = 0; i < arguments.length; i++) {
      const node = new Node(arguments[i])
      // const node = { "value": arguments[i], "next": null };

      // if tail exists, tail Node's next points to Node
      if (this.tail) this.tail.next = node

      // tail becomes new Node ref
      this.tail = node

      // sets head if it doesn't exist
      if (!this.head) this.head = node
    }
  }

  prepend (arg) {
    const node = new Node(arg)

    // prepending to existing head node
    if (this.head) node.next = this.head
    this.head = node

    // sets tail if this is the only node
    if (!this.tail) this.tail = node
  }

  delete (arg) {
    if (!this.head) return false
    let flag = false

    // checks and reassigns head to next node if value matches
    while (this.head && this.head.value === arg) {
      this.head = this.head.next
      if (!flag) flag = true
    }

    let cur = this.head
    // skips the head
    while (cur.next) {
      if (cur.next.value === arg) {
        let pointer = cur.next
        cur.next = pointer.next
        pointer = null
        if (!flag) flag = true
      } else {
        cur = cur.next
      }
    }

    // updates tail
    if (this.tail.value === arg) {
      this.tail = cur
      if (!flag) flag = true
    }
    return flag
  }

  find (arg) {
    if (!this.head) return false

    let cur = this.head
    // first occurrence
    while (cur) {
      if (cur.value === arg) return cur
      cur = cur.next
    }

    return null
  }

  insertAfter (nodeValue, arg) {
    if (!this.head) return false

    const firstNodeWithValue = this.find(nodeValue)
    if (firstNodeWithValue) {
      const node = new Node(arg)
      node.next = firstNodeWithValue.next
      firstNodeWithValue.next = node
      return true
    }
  }

  toArray () {
    const arr = []

    let cur = this.head
    while (cur) {
      arr.push(cur)
      cur = cur.next
    }

    return arr
  }
}

const list1 = new LinkedList()
list1.append(1, 2, 3, 4, 3, 3, 5, 3)
list1.prepend(0)
list1.delete(3)
list1.insertAfter(2, 'a')

console.log('\n\t' + JSON.stringify(list1))
console.log('\n------------------\n')
console.log(list1.toArray())
console.log('\n------------------\n')
console.log(list1.find(0))
