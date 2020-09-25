# DP

## 1. Optimal substructure

* Problem can be resolved by evaluating solutions from sub problems

## 2. Overlapping sub-problems

* Sub-problems can be evaluated in a similar manner and are finite

* Resolving sub-problems does not generate new sub-problems

### DP eliminates resolving the same sub-problem and solves each only once

```javascript
// naive recursive (exponential runtime)
function naiveFib(num) {
  if (num <= 2) num = 1
  else num = naiveFib(num - 1) + naiveFib(num - 2)
  return num
}
```

### Top down

* Memoize previous solutions and reuse || add when applicable

```javascript
// Memoization (Dictionary / Object caching: linear runtime)
// Consumes more memory, memory(n)
const memo = {}
function memoFib(num) {
  let x
  if (memo[num]) return memo[num]
  else if (num <= 2) x = 1
  else x = memoFib(num - 1) + memoFib(num - 2)
  memo[num] = x
  return x
}
```

### Bottom up

* Resolve sub-problems and use its solution to build up to the main problem

```javascript
// Bottom-up, increasing order (notice Dictionary is inside the function)
// Can overwrite previous memory, only keep the previous 2 to calculate the next
function bottomUpFib(range) {
  const bottomUpMemo = {}
  let x
  for (let i = 1; i <= range; i++) {
    if (i <= 2) x = 1
    else x = bottomUpMemo[i - 1] + bottomUpMemo[i - 2]
    bottomUpMemo[i] = x
  }
  return bottomUpMemo
}
```

### Leetcode

198, 509, 746
