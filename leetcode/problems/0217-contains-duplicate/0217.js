/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length
};