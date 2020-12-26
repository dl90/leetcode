/*
  Design a stack which supports the following operations.
  Implement the CustomStack class:
    CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
    void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
    int pop() Pops and returns the top of stack or -1 if the stack is empty.
    void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.

  Example 1:
    Input
      ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
      [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
    Output
      [null,null,null,2,null,null,null,null,null,103,202,201,-1]
    Explanation
      CustomStack customStack = new CustomStack(3); // Stack is Empty []
      customStack.push(1);                          // stack becomes [1]
      customStack.push(2);                          // stack becomes [1, 2]
      customStack.pop();                            // return 2 --> Return top of the stack 2, stack becomes [1]
      customStack.push(2);                          // stack becomes [1, 2]
      customStack.push(3);                          // stack becomes [1, 2, 3]
      customStack.push(4);                          // stack still [1, 2, 3], Don't add another elements as size is 4
      customStack.increment(5, 100);                // stack becomes [101, 102, 103]
      customStack.increment(2, 100);                // stack becomes [201, 202, 103]
      customStack.pop();                            // return 103 --> Return top of the stack 103, stack becomes [201, 202]
      customStack.pop();                            // return 202 --> Return top of the stack 102, stack becomes [201]
      customStack.pop();                            // return 201 --> Return top of the stack 101, stack becomes []
      customStack.pop();                            // return -1 --> Stack is empty return -1.

  Constraints:
    1 <= maxSize <= 1000
    1 <= x <= 1000
    1 <= k <= 1000
    0 <= val <= 100
    At most 1000 calls will be made to each method of increment, push and pop each separately.
 */

/**
 * @param {number} maxSize
 */
function CustomStack (maxSize) {
  const _body = {}
  let _currentIndex = 0

  Object.defineProperties(this, {
    maxSize: {
      enumerable: true,
      configurable: false,
      value: maxSize > 0 ? maxSize : 10,
      writable: false
    },
    body: {
      enumerable: true,
      configurable: false,
      get: () => { return _body }
    },
    currentIndex: {
      enumerable: true,
      configurable: false,
      get: () => { return _currentIndex },
      set: (arg) => {
        if ((typeof arg === 'number') && (arg >= 0) && (arg <= this.maxSize)) _currentIndex = arg
      }
    }
  })

  return null
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.currentIndex < this.maxSize) {
    this.body[this.currentIndex] = x
    this.currentIndex++
    return null
  }
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  let returnVal
  if (this.currentIndex > 0) {
    returnVal = (this.body[this.currentIndex - 1])
    delete this.body[this.currentIndex - 1]
    this.currentIndex--
  } else {
    returnVal = -1
  }
  return returnVal
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.currentIndex > k) { // increment up to k
    for (let i = 0; i < k; i++) {
      this.body[i] += val
    }
  } else {
    for (const key in this.body) { // increment all
      this.body[key] += val
    }
  }
  return null
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

const stack = new CustomStack(3)
console.log({ stack }, stack.currentIndex)

stack.push(10)
stack.push(9)
stack.push(8)
stack.push(7) // not pushed

console.log(stack.body)
stack.body = { 1: 1 }
stack.body = null
delete stack.body
console.log(stack.body) // stack.body still exists
console.log(Object.entries(stack.body))
console.log('-----------------------------')

console.log(stack.pop(), stack.pop(), stack.pop())
console.log(stack.pop()) // poping empty stack returns -1
console.log(stack.currentIndex)

console.log({ stack }, stack.currentIndex)
stack.push(10)
stack.push(9)
stack.push(8)
stack.push(7)
console.log(stack.currentIndex)
console.log('-----------------------------')

console.log(stack.body, stack.currentIndex)
stack.increment(5, 3) // increment first 5 ele by 3
console.log(stack.body, stack.currentIndex)

stack.increment(1, 6) // increment first ele by 6
console.log(stack.body, stack.currentIndex)

stack.increment(2, 100) // increment fist 2 ele by 100
console.log(stack.body, stack.currentIndex)

console.log({ stack })
