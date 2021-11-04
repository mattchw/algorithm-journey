/**
 * Runtime: 148 ms
 * Memory Usage: 44.2 MB
 */
 var romanToInt = function(s) {
  const map = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
  }
  
  if (s == "") {
  return 0;
}
  
  let res = 0;
  let last = 0;
  
  for (let i = 0; i < s.length; i++) {
      let num = map[s[i]];
      if (num > last) {
          if (last === 0) {
              res += num;
          } else {
              res = res + (num - last) - last;
          }
      } else {
          res += num;
      }
      last = num;
  }
  
  return res;
};