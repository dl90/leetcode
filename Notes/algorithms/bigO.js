/**
 * @author Don (dl90)
 * @date December 27, 2019
 */

const countChars = (str) => {
  let counter = 0; // assignment O(1)
  for (let i = 0; i < str.length; i++) {
    counter += 1; // linear depends on input length O(n)
  }

  // string
  const length = str.length; // O(1) constant time operation
  console.log(" .length " + length);

  // array
  let myList = [1, 2, 3];
  myList.push(4); // constant time O(1);

  myList.shift(); // removes first element from array
  myList.unshift(); // adds to the first element of array

  /*
  lookup of array length is in constant time;
  operation carrying out .shift() is O(n)
  */

  myList.pop() // remove last item, no need to shift other items, constant time operation O(1)

  return counter; // O(1)
}

const isUnique = (arr) => { // O(n^2)
  let state = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        state = false;
      }
    }
  }
  return state;
}

const isUniqueObj = (arr) => { // O(n) ~breadcrumb method, caching~
  const cache = {}; // object uses more memory, but relatively inconsequential to compute time
  let state = true;

  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]]) { // the property lookup of cache(object) is constant O(1)
      state = false;
    } else {
      cache[arr[i]] = true;
    }
  }
  return state;
}
