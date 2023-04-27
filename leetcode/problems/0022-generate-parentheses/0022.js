/**
 * Runtime: 76 ms
 * Memory Usage: 40.2 MB
 */
var generateParenthesis = function (n) {
  let res = [];
  if (n == 0) {
    return res;
  }
  findGenerateParenthesis(n, n, "", res);
  return res;
};

var findGenerateParenthesis = function (leftIndex, rightIndex, str, result) {
  if (leftIndex == 0 && rightIndex == 0) {
    result.push(str);
    return;
  }
  if (leftIndex > 0) {
    findGenerateParenthesis(leftIndex - 1, rightIndex, str + "(", result);
  }
  if (rightIndex > 0 && leftIndex < rightIndex) {
    findGenerateParenthesis(leftIndex, rightIndex - 1, str + ")", result);
  }
}

// using backtracking
var generateParenthesis = function (n) {
  const stack = [];
  const res = [];

  const backtrack = (openCount, closeCount) => {
    if (openCount === n && closeCount === n) {
      res.push(stack.join(''));
      return;
    }

    if (openCount < n) {
      stack.push('(');
      backtrack(openCount + 1, closeCount);
      stack.pop();
    }

    if (closeCount < openCount) {
      stack.push(')');
      backtrack(openCount, closeCount + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
}