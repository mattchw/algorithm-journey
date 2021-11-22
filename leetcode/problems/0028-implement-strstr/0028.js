/**
 * Runtime: 121 ms
 * Memory Usage: 39.7 MB
 */
 var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      if (haystack.substring(i, i + needle.length) == needle) {
    return i;
  }
  }
  return -1;
};