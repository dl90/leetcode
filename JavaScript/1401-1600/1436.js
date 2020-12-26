'use strict'
const test = require('../test.js').test
/*
  You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
  Return the destination city, that is, the city without any path outgoing to another city.
  It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

  Example 1:
    Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
    Output: "Sao Paulo"
    Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.
      Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

  Example 2:
    Input: paths = [["B","C"],["D","B"],["C","A"]]
    Output: "A"
    Explanation: All possible trips are:
      "D" -> "B" -> "C" -> "A".
      "B" -> "C" -> "A".
      "C" -> "A".
      "A".
      Clearly the destination city is "A".

  Example 3:
    Input: paths = [["A","Z"]]
    Output: "Z"

  Constraints:
    1 <= paths.length <= 100
    paths[i].length == 2
    1 <= cityAi.length, cityBi.length <= 10
    cityAi != cityBi
    All strings consist of lowercase and uppercase English letters and the space character.
*/

var destCity = function (arr) {
  const map = new Map()

  /*
    1 for cityA and 0 for cityB to differentiate the 2 (destination city is always cityB)
    increment count if city's been visited either as cityA or cityB
  */
  arr.forEach(ele => {
    map.has(ele[0]) ? map.set(ele[0], map.get(ele[0]) + 1) : map.set(ele[0], 1)
    map.has(ele[1]) ? map.set(ele[1], map.get(ele[1]) + 1) : map.set(ele[1], 0)
  })
  // console.log(map);

  for (const [k, v] of map) if (v == 0) return k
}

test(
  destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']]), // "Sao Paulo"
  destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]), // A
  destCity([['A', 'Z']]) // z
)
