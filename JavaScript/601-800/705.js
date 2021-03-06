'use strict'
/*
  Design a HashSet without using any built-in hash table libraries.
  To be specific, your design should include these functions:
    add(value): Insert a value into the HashSet.
    contains(value) : Return whether the value exists in the HashSet or not.
    remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

  Example:
    MyHashSet hashSet = new MyHashSet();
    hashSet.add(1);
    hashSet.add(2);
    hashSet.contains(1);    // returns true
    hashSet.contains(3);    // returns false (not found)
    hashSet.add(2);
    hashSet.contains(2);    // returns true
    hashSet.remove(2);
    hashSet.contains(2);    // returns false (already removed)

  Note:
    All values will be in the range of [0, 1000000].
    The number of operations will be in the range of [1, 10000].
    Please do not use the built-in HashSet library.
*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  const _data = {}

  Object.defineProperties(this, {
    data: {
      enumerable: true,
      configurable: false,
      get: () => { return _data }
    }
  })
}

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function (key) {
  if (!this.data.hasOwnProperty(key)) {
    this.data[key] = key
    return true
  }
  return 'already exists'
}

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function (key) {
  if (this.data.hasOwnProperty(key)) {
    delete this.data[key]
    return true
  }
  return false
}

/**
* Returns true if this set contains the specified element
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function (key) {
  return this.data.hasOwnProperty(key)
}

const hashSet = new MyHashSet()
hashSet.add(1)
hashSet.add(2)
console.log({ hashSet }, Object.keys(hashSet), hashSet.data)

console.log(hashSet.contains(1))
console.log(hashSet.contains(3))

console.log(hashSet.add(2))
console.log(hashSet.remove(2))
console.log(hashSet.contains(2))

console.log(hashSet._data)
console.log(hashSet.data)
