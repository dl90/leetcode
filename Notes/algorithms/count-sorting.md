# Count Sorting

Used to sort integers or maps with integer keys by counting the number of occurrences for each key.

O(n + k), k for the range of n keys.

Ideal for sequences where the key range (min max) is not significantly greater than the length of the sequence

```js
const arr = [9, 4, 5, 4, 6, 7, 4]
console.log(countSort(arr))

function countSort(input, min = null, max = null) {
  const _min = min ? min : Math.min(...input)
  const _max = max ? max : Math.max(...input)
  const _len = _max - _min + 1
  const res = []

  // type of arr depends on max frequency of elements in input
  const arr = new Int8Array(_len)

  // populates arr with idx 0 starting at _min
  input.forEach(val => arr[val - _min]++)

  let arrPointer = 0
  for (let i = _min; i <= _max; i++) {
    while (arr[arrPointer] > 0) {
      res.push(i)
      arr[arrPointer]--
    }
    arrPointer++
  }

  return res
}
```
