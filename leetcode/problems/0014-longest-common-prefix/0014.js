/**
 * Runtime: 72 ms
 * Memory Usage: 40 MB
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(res)) {
          res = res.substring(0, res.length - 1);
          if (res === '') return '';
      }
  }
  return res;
};