/**
 * Runtime: 185 ms
 * Memory Usage: 43.8 MB
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
  }
  const len1 = nums1.length;
  const len2 = nums2.length;
  let low = 0;
  let high = len1;
  while (low <= high) {
      const i = low + Math.floor((high - low) / 2);
      const j = Math.floor((len1 + len2 + 1) / 2) - i;

      const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
      const minRightA = i === len1 ? Infinity : nums1[i];
      const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
      const minRightB = j === len2 ? Infinity : nums2[j];

      if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
        return (len1 + len2) % 2 === 1
          ? Math.max(maxLeftA, maxLeftB)
          : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else if (maxLeftA > minRightB) {
        high = i - 1;
      } else {
        low = i + 1;
      }
  }
};