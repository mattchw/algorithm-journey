/**
 * Runtime: 76 ms
 * Memory Usage: 40.2 MB
 */
var generateParenthesis = function(n) {
  let res = [];
  if (n == 0) {
    return res;
  }
  findGenerateParenthesis(n, n, "", res);
  return res;
};

var findGenerateParenthesis = function(leftIndex, rightIndex, str, result) {
  if (leftIndex == 0 && rightIndex == 0) {
    result.push(str);
    return;
  }
  if (leftIndex > 0) {
    findGenerateParenthesis(leftIndex-1, rightIndex, str+"(", result);
  }
  if (rightIndex > 0 && leftIndex < rightIndex) {
    findGenerateParenthesis(leftIndex, rightIndex-1, str+")", result);
  }
}