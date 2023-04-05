/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 */

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let curr = num;
      let currMax = 1;

      while (set.has(curr + 1)) {
        curr++;
        currMax++;
      }

      max = Math.max(max, currMax);
    }
  }

  return max;
}