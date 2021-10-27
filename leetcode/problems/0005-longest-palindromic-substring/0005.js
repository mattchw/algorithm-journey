/**
 * Runtime: 4388 ms
 * Memory Usage: 45.3 MB
 */
 var longestPalindrome = function (s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
      let s1 = '';
      let s2 = '';
      for (let j = i; j < s.length; j++) {
          s1 = s1 + s[j];
          s2 = s[j] + s2;
          if (s1 == s2 && s1.length > res.length) {
              res = s1;
          }
      }
  }
  return res;
};