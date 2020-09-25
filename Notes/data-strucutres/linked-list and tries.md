# Linked List

Sequence of nodes (objects) containing value and a pointer pointing to the next node.

Advantages:

* inserting and removing nodes = modifying pointers and does not affect other nodes

Disadvantages:

* no index and slow to search
* nodes accessed sequentially
* more memory

Types:

* singly : one pointer to one node
* doubly : two pointers for previous and next
* circular : last node points to first node (loop)

## Tries

Tree type data structure similar to hierarchical directory that stores characters in a way that simplifies searching

Kind of like linked list except it contains a set of values to point to.

```text
                              (root)
        a                       b                              c
    l       n              a          o                a              o
    l       d           d     l       b                n              n
  (all)   (and)       (bad)   l      (bob)         (can)    t         s
                             (ball)                         (cant)    o
                                                                      l
                                                                      e
                                                                   (console)
```
