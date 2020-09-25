/**
 * @author Don (dl90)
 * @date December 20, 2019
 * @note https://www.youtube.com/watch?v=OQ5jsbhAv_M
*/

/*
  Dynamic programming: good for shortest paths, min/max problems, optimizing something.
  best case BigO = polynomial
  problems => sub-problems => reuse
  recursion + memoization
*/

// fibonacci
// F1 && F2 = 1
// Fn = Fn-1 + Fn-2

// naive recursive (exponential runtime)
function naiveFib (num) {
  return num <= 2 ? 1 : (naiveFib(num - 1) + naiveFib(num - 2))
}

// Memoization (Dictionary / Object caching: linear runtime)
// Consumes more memory, memory(n)
function memoFib (N, memo = new Map()) {
  let res
  if (memo.has(N)) res = memo.get(N)
  else if (N < 1) res = 0
  else if (N < 3) res = 1
  else res = memoFib(N - 1, memo) + memoFib(N - 2, memo)
  memo.set(N, res)
  return res
}

// Bottom-up, increasing order (notice Dictionary is inside the function)
// Can overwrite previous memory, only keep the previous 2 to calculate the next
function bottomUp (N) {
  let [res, one, two, temp] = [0, 1, 1]
  for (let i = 1; i <= N; i++) {
    if (i < 3) res = 1
    else {
      temp = one + two;
      [one, two, res] = [two, temp, temp]
    }
  }
  return res
}

main(44)
function main (num) {
  const performance = require("perf_hooks")

  const start = performance.performance.now()
  console.log(naiveFib(num))
  const end = performance.performance.now()
  console.info(`NaiveFib Runtime: ~${end - start} ms\n`)

  const start1 = performance.performance.now()
  console.log(memoFib(num))
  const end1 = performance.performance.now()
  console.info(`MemoFib Runtime: ~${end1 - start1} ms\n`)

  const start2 = performance.performance.now()
  console.log(bottomUp(num))
  const end2 = performance.performance.now()
  console.info(`BottomUpFib Runtime: ~${(end2 - start2)} ms\n`)
}
