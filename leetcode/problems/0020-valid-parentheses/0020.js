/**
 * Runtime: 76 ms
 * Memory Usage: 41 MB
 */
 var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if (stack.length === 0) {
          if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
              stack.push(s[i]);
              continue;
          } else {
              return false;
          }
          
      } else {
          if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
              stack.push(s[i]);
              continue;
          } else {
              const str = stack.pop();
              if (str === '{' && s[i] !== '}') {
                  return false;
              } else if (str === '[' && s[i] !== ']') {
                  return false;
              } else if (str === '(' && s[i] !== ')') {
                  return false;
              }
          }
      }
  }
  if (stack.length === 0) {
      return true;
  }
  return false;
};