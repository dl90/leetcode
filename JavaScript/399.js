import { test } from './test.js'
/*
  You are given equations in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating-point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

  The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

  Example 1:
    Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
    Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
    Explanation:
      Given: a / b = 2.0, b / c = 3.0
      queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
      return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

  Example 2:
    Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
    Output: [3.75000,0.40000,5.00000,0.20000]

  Example 3:
    Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
    Output: [0.50000,2.00000,-1.00000,-1.00000]

  Constraints:
    1 <= equations.length <= 20
    equations[i].length == 2
    1 <= equations[i][0], equations[i][1] <= 5
    values.length == equations.length
    0.0 < values[i] <= 20.0
    1 <= queries.length <= 20
    queries[i].length == 2
    1 <= queries[i][0], queries[i][1] <= 5
    equations[i][0], equations[i][1], queries[i][0], queries[i][1] consist of lower case English letters and digits.
*/

// @TODO study
var calcEquation = function (equations, values, queries) {
  const graph = {}
  const zip = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]))

  for (const [[dividend, divisor], result] of zip(equations, values)) {
    graph[dividend] = graph[dividend] || {}
    graph[dividend][divisor] = result

    graph[divisor] = graph[divisor] || {}
    graph[divisor][dividend] = 1 / result
  }
  return queries.map(query => getResult(query))

  function getResult ([dividend, divisor]) {
    if (!graph[dividend] || !graph[divisor]) return -1
    const visited = new Set([dividend])
    const q = [{ cur: dividend, res: 1 }]
    while (q.length) {
      const { cur, res } = q.shift()
      if (cur === divisor) { return res }

      for (const [child, mult] of Object.entries(graph[cur] || {})) {
        if (!visited.has(child)) {
          visited.add(child)
          q.push({
            cur: child,
            res: res * mult
          })
        }
      }
    }
    return -1
  }
}

// @TODO study
function fastest (equations, values, queries) {
  const relationships = new Map()
  for (let i = 0; i < equations.length; i++) {
    const [var1, var2] = equations[i]
    const weight = values[i]
    const inverseWeight = 1 / weight

    relationships.set(var1, { ...(relationships.get(var1) || {}), [var2]: weight })
    relationships.set(var2, { ...(relationships.get(var2) || {}), [var1]: inverseWeight })
  }

  const dfs = (v, target, seen) => {
    const varRelations = relationships.get(v)
    seen[v] = true

    for (const key in varRelations) {
      if (seen[key]) continue
      if (target === key) return varRelations[target]
      const val = dfs(key, target, seen)
      if (val !== -1) return val * varRelations[key]
    }
    return -1
  }

  const results = []
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    if (query[0] === query[1] && relationships.has(query[0])) {
      results.push(1)
      continue
    }
    results.push(dfs(query[0], query[1], {}))
  }
  return results
}

test(
  calcEquation,
  [[['a', 'b'], ['b', 'c']], [2.0, 3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]] // [6.00000,0.50000,-1.00000,1.00000,-1.00000]
)

test(
  fastest,
  [[['a', 'b'], ['b', 'c']], [2.0, 3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]] // [6.00000,0.50000,-1.00000,1.00000,-1.00000]
)
