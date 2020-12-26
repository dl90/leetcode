import { test } from '../test.js'
/*
  Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  Example 1:
    Given nums = [1,1,2],
    Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
    It doesn't matter what you leave beyond the returned length.

  Example 2:
    Given nums = [0,0,1,1,1,2,2,3,3,4],
    Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

  It doesn't matter what values are set beyond the returned length.

  Clarification:
    Confused why the returned value is an integer but your answer is an array?
    Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

    Internally you can think of this:
      // nums is passed in by reference. (i.e., without making a copy)
      int len = removeDuplicates(nums);

      // any modification to nums in your function would be known by the caller.
      // using the length returned by your function, it prints the first len elements.
      for (int i = 0; i < len; i++) {
        print(nums[i]);
      }
*/

var removeDuplicates = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return 1
  let counter = 0
  let num

  /*
    [[1], 1, 2, 2]
      num = 1
      arr[0] = 1

    [1, [1], 2, 2]
      pass

    [1, 1, [2], 2]
      num = 2
      arr[1] = 2

    [1, 2, 2, [2]]
      pass
  */
  for (let i = 0; i < len; i++) {
    if (num !== nums[i]) {
      num = nums[i]
      nums[counter] = num
      counter++
    }
  }
  return counter
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

test(
  removeDuplicates,
  [[1, 1, 2]], // 2
  [arr] // 5
)

console.log(arr)
