/**
 * Runtime: 104 ms
 * Memory Usage: 45.2 MB
 */
 var convert = function(s, numRows) {
  if (numRows === 1 || s.length < numRows) {
      return s;
  }
  let arr = [];
  let i = 0;
  let up = false;
  for (let k = 0; k < numRows; k++) {
      arr[k] = [];
  }
  for (let cur = 0; cur < s.length; cur++) {
      arr[i].push(s[cur]);
      if (i < numRows - 1 && up == false) {
          i++;
      }
      else if (i == numRows - 1 && up == false) {
          i--;
          up = true;
      }
      else if (i > 0 && up == true) {
          i--;
      }
      else if (i == 0 && up == true) {
          i++;
          up = false;
      }
  }
  let res = '';
  arr.forEach((a) => {
      res += a.join("");
  });
  return res;
};