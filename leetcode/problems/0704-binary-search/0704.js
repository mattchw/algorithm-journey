/**
 * Runtime: 52ms
 * Memory Usage: 45.5MB
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor(r - l / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      r = mid - 1;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    }
  }

  return -1;
};