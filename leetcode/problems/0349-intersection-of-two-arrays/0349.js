/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * Runtime: 78 ms
 * Memory Usage: 42 MB
 */
var intersection = function(nums1, nums2) {
  return nums1.filter(value => nums2.includes(value)).filter((e, i, arr) => {
    return arr.indexOf(e) === i;
  })
};