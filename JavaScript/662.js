'use strict'
const test = require('./test.js').test
/*
  Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

  One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

  Your implementation should support following operations:
    MyCircularQueue(k): Constructor, set the size of the queue to be k.
    Front: Get the front item from the queue. If the queue is empty, return -1.
    Rear: Get the last item from the queue. If the queue is empty, return -1.
    enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
    deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
    isEmpty(): Checks whether the circular queue is empty or not.
    isFull(): Checks whether the circular queue is full or not.

  Example:
    MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
    circularQueue.enQueue(1);  // return true
    circularQueue.enQueue(2);  // return true
    circularQueue.enQueue(3);  // return true
    circularQueue.enQueue(4);  // return false, the queue is full
    circularQueue.Rear();  // return 3
    circularQueue.isFull();  // return true
    circularQueue.deQueue();  // return true
    circularQueue.enQueue(4);  // return true
    circularQueue.Rear();  // return 4

  Note:
    All values will be in the range of [0, 1000].
    The number of operations will be in the range of [1, 1000].
    Please do not use the built-in Queue library.
*/

var MyCircularQueue = function (k) {
  Object.defineProperties(this, {
    _queue: {
      enumerable: false,
      configurable: false,
      writable: false,
      value: new Array(k)
    },
    queue: {
      enumerable: true,
      configurable: false,
      get: function () { return this._queue }
    },
    size: {
      enumerable: true,
      configurable: false,
      writable: false,
      value: k
    },
    count: {
      enumerable: true,
      configurable: false,
      writable: true,
      value: 0
    },
    enqueuePointer: {
      enumerable: true,
      configurable: false,
      writable: true,
      value: 0
    },
    dequeuePointer: {
      enumerable: true,
      configurable: false,
      writable: true,
      value: 0
    },
    rearPointer: {
      enumerable: true,
      configurable: false,
      writable: true,
      value: 0
    }
  })
}

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.enqueuePointer < this.size && !this.queue[this.enqueuePointer]) {
    this.queue[this.enqueuePointer] = value
    this.count++
    this.rearPointer = this.enqueuePointer
    this.enqueuePointer === this.size - 1 ? this.enqueuePointer = 0 : this.enqueuePointer++
    return true
  }
  return false
}

MyCircularQueue.prototype.deQueue = function () {
  if (this.dequeuePointer < this.size && this.queue[this.dequeuePointer] !== undefined) {
    delete this.queue[this.dequeuePointer]
    this.count--
    this.dequeuePointer === this.size - 1 ? this.dequeuePointer = 0 : this.dequeuePointer++
    return true
  }
  return false
}

MyCircularQueue.prototype.Front = function () {
  return this.queue[this.dequeuePointer] ?? -1
}

MyCircularQueue.prototype.Rear = function () {
  return this.queue[this.rearPointer] ?? -1
}

MyCircularQueue.prototype.isEmpty = function () {
  // return Object.values(this.queue).length === 0;
  return this.count === 0
}

MyCircularQueue.prototype.isFull = function () {
  // return Object.values(this.queue).length === this.size;
  return this.count === this.size
}

const obj = new MyCircularQueue(5);

(() => {
  const hrStart = process.hrtime()

  console.log(
    obj.enQueue(1),
    obj.enQueue(2),
    obj.enQueue(3),
    obj.enQueue(4),
    obj.enQueue(5),
    obj.enQueue(6),
    { obj },
    obj.queue,
    obj.Front(), obj.Rear(), obj.isEmpty(), obj.isFull()
    // obj.deQueue(),
    // obj.deQueue(),
    // obj.deQueue(),
    // obj.deQueue(),
    // obj.deQueue(),
    // obj.deQueue(),
    // { obj },
    // obj.queue,
    // obj.Front(), obj.Rear(), obj.isEmpty(), obj.isFull(),
  )

  const used = process.memoryUsage()
  const hrEnd = process.hrtime(hrStart)

  console.log('\n-----------------------------')
  console.log('=>', hrEnd[1] / 1000000, 'ms')
  console.log('-----------------------------')
  for (const key in used) { console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`) }
  console.log('-----------------------------\n')
})()
