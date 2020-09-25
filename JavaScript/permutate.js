// @TODO

function permute (permutation) {
  const len = permutation.length
  const result = [permutation.slice()]
  const c = new Array(len).fill(0)

  let i = 1
  let k
  let p

  while (i < len) {
    if (c[i] < i) {
      k = i % 2 && c[i]
      p = permutation[i]
      permutation[i] = permutation[k]
      permutation[k] = p
      ++c[i]
      i = 1
      result.push(permutation.slice())
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}

console.log(permute([1, 2, 3]))
