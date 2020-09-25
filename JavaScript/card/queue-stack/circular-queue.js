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

const obj = new MyCircularQueue(5)
console.log(obj.enQueue(1))
console.log(obj.enQueue(2))
console.log(obj.enQueue(3))
console.log(obj.enQueue(4))
console.log(obj.enQueue(5))
console.log(obj.enQueue(6))
console.log('\n=======================')
console.log({ obj })
console.log(obj.queue)
console.log(obj.Front(), obj.Rear(), obj.isEmpty(), obj.isFull())
console.log('\n=======================')
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log('\n=======================')
console.log({ obj })
console.log(obj.queue)
console.log(obj.Front(), obj.Rear(), obj.isEmpty(), obj.isFull())
console.log('\n=======================')
