/*
  Linked List

  linear data structure
  no indexes, only knows own value and pointer to next element

  flexible with resizing
  efficient insertion and deletion at beginning/end of the list: O(1)

  Advantages:
    inserting and removing nodes = modifying pointers and does not affect other nodes

  Disadvantages:
    no index and slow to search: O(n)
    nodes accessed sequentially: O(n)
    insertions/deletions between head/tail requires traversal
    more memory

  Types:
    singly : one pointer to one node
    doubly : two pointers for previous and next
    circular : last node points to first node (loop)
*/

class Node {
  constructor (val) {
    this.value = val
    this.next = null
  }
}

class Node2 extends Node {
  constructor (val) {
    super(val)
    this.prev = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  append () {
    if (!arguments.length) return false
    for (const arg of arguments) {
      const node = new Node(arg)
      if (!this.head) this.head = node
      if (this.tail) this.tail.next = node
      this.tail = node
    }
  }

  prepend (arg) {
    const node = new Node(arg)
    if (this.head) node.next = this.head
    this.head = node
    if (!this.tail) this.tail = node
  }

  delete (arg) {
    if (!this.head) return false
    let cur = this.head
    let flag = false

    while (this.head && this.head.value === arg) {
      this.head = this.head.next
      if (!flag) flag = true
    }

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

    if (this.tail.value === arg) {
      this.tail = cur
      if (!flag) flag = true
    }
    return flag
  }

  find (arg) {
    if (!this.head) return false
    let cur = this.head
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

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append () {
    if (!arguments.length) return false
    for (const arg of arguments) {
      const node = new Node2(arg)
      if (!this.head) this.head = node
      if (this.tail) {
        this.tail.next = node
        node.prev = this.tail
      }
      this.tail = node
      this.length++
    }
    return true
  }

  prepend (arg) {
    const node = new Node2(arg)
    if (!this.tail) this.tail = node
    if (this.head) {
      node.next = this.head
      this.head.prev = node
    }
    this.head = node
    this.length++
    return true
  }

  delete (arg) {
    if (!this.head) return false
    let flag = false

    while (this.head && this.head.value === arg) {
      this.head = this.head.next
      this.head.prev = null
      this.length--
      if (!flag) flag = true
    }

    let cur = this.head
    while (cur.next) {
      if (cur.next.value === arg) {
        let pointer = cur.next
        cur.next = pointer.next
        if (cur.next) cur.next.prev = cur
        pointer.prev = null
        pointer.next = null
        pointer = null
        this.length--
        if (!flag) flag = true
      } else {
        cur = cur.next
      }
    }

    if (this.tail.value === arg) {
      this.tail.prev = null
      this.tail.next = null
      this.tail = cur
      this.length--
      if (!flag) flag = true
    }
    return flag
  }

  findFirst (arg) {
    if (!this.head) return false
    let cur = this.head
    while (cur) {
      if (cur.value === arg) return cur
      cur = cur.next
    }
    return null
  }

  findLast (arg) {
    if (!this.head) return false
    let cur = this.tail
    while (cur) {
      if (cur.value === arg) return cur
      cur = cur.prev
    }
    return null
  }

  insertAfterFirst (nodeValue, arg) {
    if (!this.head) return false
    const firstNodeWithValue = this.findFirst(nodeValue)
    if (firstNodeWithValue && firstNodeWithValue.next) {
      const node = new Node2(arg)
      node.next = firstNodeWithValue.next
      node.prev = firstNodeWithValue
      node.next.prev = node
      firstNodeWithValue.next = node
      this.length++
      return true
    } else if (firstNodeWithValue === this.tail) {
      return this.append(arg)
    }
    return false
  }

  insertBeforeFirst (nodeValue, arg) {
    if (!this.head) return false
    const firstNodeWithValue = this.findFirst(nodeValue)
    if (firstNodeWithValue && firstNodeWithValue.prev) {
      const node = new Node(arg)
      node.next = firstNodeWithValue
      node.prev = firstNodeWithValue.prev
      node.prev.next = node
      firstNodeWithValue.prev = node
      this.length++
      return true
    } else if (firstNodeWithValue === this.head) {
      return this.prepend(arg)
    }
    return false
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
list1.insertAfter(2, '3')
list1.append(10)
console.log('\n', JSON.stringify(list1))
console.log(list1.toArray())

const list2 = new DoublyLinkedList()
list2.append(1, 2, 3, 4)
list2.delete(4)
list2.insertAfterFirst(1, 1.5)
list2.insertAfterFirst(3, 1.5)
console.log(list2.toArray())
console.log(list2.findFirst(1.5))
console.log(list2.findLast(1.5))
