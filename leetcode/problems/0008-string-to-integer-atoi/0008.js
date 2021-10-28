/**
 * Runtime: 100 ms
 * Memory Usage: 41.4 MB
 */
 var myAtoi = function(s) {
  let i = 0;
  let sign = 1;
  let res = 0;
  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = - INT_MAX - 1;
  
  while (s[i] === ' ') i++;
  
  if (s[i] === '+' || s[i] === '-') {
      sign = s[i] === '+' ? 1 : -1;
      i++;
  }
  
  while (/^\+?\d+$/.test(s[i])) {
      res = (res * 10) + (s[i] - 0);
      if (sign === 1 && res > INT_MAX) return INT_MAX;
      if (sign === -1 && res > INT_MAX) return INT_MIN;
      i++;
  }
  
  return res * sign;
};