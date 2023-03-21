// solution 1
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const countS = {}, countT = {};
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = countS[s[i]] ? countS[s[i]] + 1 : 1;
    countT[t[i]] = countT[t[i]] ? countT[t[i]] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (countS[s[i]] !== countT[s[i]]) {
      return false;
    }
  }
  return true;
};

// solution 2
var isAnagram = function (s, t) {
  return s.split('').sort((a, b) => a > b ? -1 : 1).join('') === t.split('').sort((a, b) => a > b ? -1 : 1).join('');
};