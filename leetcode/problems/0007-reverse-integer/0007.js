/**
 * Runtime: 80 ms
 * Memory Usage: 40.3 MB
 */
 var reverse = function(x) {
  let res = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let i = x;
  while (i != 0) {
      res = res * 10 + i % 10;
      i = Math.floor(i/10);
  }
  if (res < (Math.pow(2, 31) * -1) || res > Math.pow(2, 31) - 1) return 0;
  return sign * res;
};