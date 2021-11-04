/**
 * Runtime: 156 ms
 * Memory Usage: 44.3 MB
 */
 var intToRoman = function(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  let res = '';
  let i = 0;
  while (num != 0) {
    while (values[i] > num) {
      i++;
    }
    num -= values[i]
    res += symbols[i]
  }
  return res;
};