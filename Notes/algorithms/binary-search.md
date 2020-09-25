# Binary Search

If Array is sorted, initiate search at middle

O = log (base 2) n

## iterative

```js
function search(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2); // overflow
    if (arr[mid] == val) return mid;
    if (arr[mid] > val) {
      end = mid - 1;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      return -1;
    }
  }
}
```

## recursive

```js
function search(arr, val, start = 0, end = arr.length) {
  if (start > end) return -1;
  let mid = Math.floor(start + ((end - start) / 2)); // !overflow

  if (arr[mid] == val) {
    return mid;
  } else if (arr[mid] > val) {
    return search(arr, val, start, end = (mid - 1));
  } else if (arr[mid] < val) {
    return search(arr, val, start = (mid + 1), end);
  }
}
```
