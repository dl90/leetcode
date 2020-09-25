class Queue {
  #data = new Map()
  #head = 0
  #tail = 0

  constructor () {
    for (const arg of arguments) {
      if (Array.isArray(arg)) {
        for (const ele of arg) this.enqueue(ele)
      } else {
        this.enqueue(arg)
      }
    }
  }

  enqueue () {
    for (const arg of arguments) {
      if (!Array.isArray(arg)) {
        this.#data.set(this.#tail, arg)
        this.#tail++
      }
    }
  }

  dequeue () {
    const ref = this.#data.get(this.#head)
    this.#data.delete(this.#head)
    this.#head++
    return ref
  }

  get size () { return this.#data.size }

  toString () {
    return console.log({
      head: this.#head,
      tail: this.#tail,
      data: Array.from(this.#data.entries())
    })
  }
}

const queue = new Queue(["a", "b", "c"])
queue.enqueue("x", "y")
console.log(queue.dequeue())
queue.toString()
console.log(queue.size)

const queue2 = new Queue([1])
queue2.toString()