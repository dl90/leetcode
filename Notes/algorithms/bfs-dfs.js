function bfs (node) {
  const queue = [node]
  const res = []

  let cur
  while (queue.length) {
    cur = queue.shift()
    res.push(cur.val)

    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }

  return res
}

function dfs (node) {
  const stack = [node]
  const res = []

  let cur
  while (stack.length) {
    cur = stack.pop()
    res.push(cur.val)

    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }

  return res
}
